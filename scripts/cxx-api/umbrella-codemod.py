#!/usr/bin/env fbpython
# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

import argparse
import re
from pathlib import Path

GUARD = {
    "public": "UmbrellaGuard.h",
    "frameworks": "FrameworksGuard.h",
    "private": "PrivateGuard.h",
}
LICENSE = """/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"""

CXXSTABLEAPI_DEP = 'react_native_xplat_target("react/cxxstableapi:cxxstableapi")'


class Codemod:
    def __init__(self, apply: bool):
        self.apply = apply
        self.changed = []
        self.warnings = []

    def _write(self, path: Path, text: str):
        rel = path.name
        if self.apply:
            path.write_text(text)
            print(f"  ~ wrote {rel}")
        else:
            print(f"  ~ (dry-run) would write {rel}")
        self.changed.append(str(path))

    def warn(self, msg: str):
        self.warnings.append(msg)
        print(f"  !! {msg}")

    # ---- discovery -------------------------------------------------------
    @staticmethod
    def public_headers(d: Path):
        # Top-level *.h only (matches the standard subdir_glob([("", "*.h")])).
        # Excludes the React/ umbrella subdir, which is a child dir.
        return sorted(p for p in d.glob("*.h") if p.is_file())

    @staticmethod
    def module_prefix(buck: str):
        m = re.search(r'prefix\s*=\s*"([^"]+)"', buck)
        return m.group(1)

    # ---- header guards ---------------------------------------------------
    def add_guard_include(self, path: Path, guard: str):
        text = path.read_text()
        inc = f"#include <react/cxxstableapi/{guard}>"
        if inc in text:
            return
        m = re.search(r"#pragma once\n", text)
        if not m:
            self.warn(f"no #pragma once in {path.name}; skipped guard")
            return
        end = m.end()
        rest = text[end:]
        rest = rest[1:] if rest.startswith("\n") else rest
        self._write(path, text[:end] + "\n" + inc + "\n\n" + rest)

    # ---- umbrella --------------------------------------------------------
    def write_umbrella(self, d: Path, prefix: str, name: str, headers):
        incs = "\n".join(f"#include <{prefix}/{h.name}>" for h in headers)
        body = f"""{LICENSE}
#pragma once

// =============================================================================
// Umbrella header for the `{prefix}` module - public entry point.
//
//   #include <React/{name}.h>
//
// Re-exports the module's public interface headers. React Native's own code
// should keep using the fine-grained `<{prefix}/...>` includes; only outside
// consumers use this umbrella.
// =============================================================================

// Marks that the following headers are pulled in through the umbrella, so their
// shared guard (<react/cxxstableapi/UmbrellaGuard.h>) accepts them. Scoped to
// this block so later *direct* includes in the same TU are still caught.
#define RN_UMBRELLA_CONTEXT

{incs}

#undef RN_UMBRELLA_CONTEXT
"""
        out = d / "React" / f"{name}.h"
        if self.apply:
            out.parent.mkdir(exist_ok=True)
        self._write(out, body)

    # ---- BUCK ------------------------------------------------------------
    @staticmethod
    def _match_paren(text: str, open_idx: int) -> int:
        """Index just past the ')' that matches the '(' at open_idx."""
        depth, i = 0, open_idx
        while i < len(text):
            if text[i] == "(":
                depth += 1
            elif text[i] == ")":
                depth -= 1
                if depth == 0:
                    return i + 1
            i += 1
        return len(text)

    @classmethod
    def _enclosing_rule(cls, text: str, pos: int):
        """(start, end) of the top-level call (e.g. rn_xplat_cxx_library(...))
        that encloses `pos`. Used to scope edits to the right target in BUCK
        files that declare several libraries."""
        starts = [
            m.start() for m in re.finditer(r"^\w+\(", text, re.M) if m.start() < pos
        ]
        if not starts:
            return None
        start = starts[-1]
        return (start, cls._match_paren(text, text.find("(", start)))

    def _exclude_react_from_headers(self, block: str) -> str:
        """Exclude React/** from a private `headers = glob(...)` so the umbrella
        does not flatten into a basename collision with a real header."""
        hm = re.search(r"headers\s*=\s*glob\(", block)
        if not hm:
            return block  # header-only module: no private headers glob
        hstart = block.index("(", hm.start())
        hend = self._match_paren(block, hstart)
        hglob = block[hstart:hend]
        if "React/**/*.h" in hglob:
            return block
        ex = re.search(r"exclude\s*=\s*glob\(", hglob)
        if ex:
            ex_end = self._match_paren(hglob, hglob.index("(", ex.start()))
            new = hglob[:ex_end] + ' + ["React/**/*.h"]' + hglob[ex_end:]
        else:
            new = hglob[:-1].rstrip() + ', exclude = ["React/**/*.h"])'
        return block[:hstart] + new + block[hend:]

    def edit_buck(self, d: Path, tier: str, name: str):
        buck = d / "BUCK"
        text = orig = buck.read_text()

        if "react_native_xplat_target" not in text:
            text = text.replace(
                '"rn_xplat_cxx_library"',
                '"react_native_xplat_target",\n    "rn_xplat_cxx_library"',
                1,
            )

        ehm = re.search(r"^\s*exported_headers\s*=", text, re.M)
        if ehm is None:
            self.warn("no exported_headers field in BUCK; wire deps/flags by hand")
            if text != orig:
                self._write(buck, text)
            return
        eh = ehm.start()

        # public: merge the umbrella into exported_headers (idempotent).
        if tier == "public":
            if f'"React/{name}.h"' in text:
                pass  # already merged
            else:
                sg = text.find("subdir_glob(", eh)
                if sg != -1:
                    i = self._match_paren(text, text.index("(", sg))
                    # If the subdir_glob is part of a larger expression -- e.g.
                    # `subdir_glob(...) + selects.with_or(...)` -- inserting the
                    # union here would break operator precedence and produce a
                    # `dict | Select` parse error. Detect and skip.
                    tail = text[i : i + 200].lstrip()
                    if tail.startswith(("+", "|")):
                        self.warn(
                            "exported_headers is an aggregate expression "
                            "(subdir_glob + ...); merge the umbrella "
                            f'"React/{name}.h" into exported_headers by hand'
                        )
                    else:
                        union = f' | {{\n        "React/{name}.h": "React/{name}.h",\n    }}'
                        text = text[:i] + union + text[i:]
                else:
                    self.warn(
                        "exported_headers is not a plain subdir_glob; merge the "
                        f'umbrella "React/{name}.h" into exported_headers by hand'
                    )

        # Scope the remaining edits to the rule that owns exported_headers, so a
        # multi-target BUCK file (e.g. a separate `test-deps` lib) gets the dep
        # and flags on the right target. Match the field assignment (not a stray
        # "exported_headers" mention in a comment).
        ehm = re.search(r"^\s*exported_headers\s*=", text, re.M)
        span = self._enclosing_rule(text, ehm.start())
        if span is None:
            self.warn("could not locate the enclosing library rule in BUCK")
            if text != orig:
                self._write(buck, text)
            return
        s, e = span
        block = self._wire_library_block(text[s:e], tier)
        text = text[:s] + block + text[e:]
        if text != orig:
            self._write(buck, text)

    def _wire_library_block(self, block: str, tier: str) -> str:
        """Add the cxxstableapi exported_dep, -DRN_BUILDING, and (public) the
        React/** headers-glob exclusion to a single library rule block."""
        if "react/cxxstableapi:cxxstableapi" not in block:
            if "exported_deps = [" in block:
                block = block.replace(
                    "exported_deps = [",
                    f"exported_deps = [\n        {CXXSTABLEAPI_DEP},",
                    1,
                )
            elif "\n    visibility = " in block:
                block = block.replace(
                    "\n    visibility = ",
                    f"\n    exported_deps = [{CXXSTABLEAPI_DEP}],\n    visibility = ",
                    1,
                )
            else:
                self.warn("could not add cxxstableapi exported_dep to BUCK")
        if "RN_BUILDING" not in block:
            if "preprocessor_flags" in block:
                # Existing preprocessor_flags assignment - inserting another
                # would produce a "repeated named argument" Starlark error.
                # Skip and let the maintainer merge -DRN_BUILDING manually.
                self.warn(
                    "preprocessor_flags already set; add -DRN_BUILDING to the "
                    "existing assignment by hand"
                )
            elif "\n    visibility = " in block:
                block = block.replace(
                    "\n    visibility = ",
                    '\n    preprocessor_flags = ["-DRN_BUILDING"],\n    visibility = ',
                    1,
                )
        if tier == "public":
            block = self._exclude_react_from_headers(block)
        return block

    # ---- CMake -----------------------------------------------------------
    def edit_cmake(self, d: Path, tier: str):
        cm = d / "CMakeLists.txt"
        if not cm.exists():
            self.warn("no CMakeLists.txt")
            return
        text = orig = cm.read_text()
        m = re.search(r"add_library\((\w+)(\s+INTERFACE)?", text)
        if not m:
            self.warn("no add_library in CMakeLists.txt")
            return
        tgt = m.group(1)
        # INTERFACE libs need the INTERFACE keyword; OBJECT/STATIC use plain
        # link + PUBLIC includes. Mixing forms on one target is a CMake error.
        iface = bool(m.group(2))
        link_scope = "INTERFACE " if iface else ""
        inc_scope = "INTERFACE" if iface else "PUBLIC"
        if "react_cxxstableapi" not in text:
            text += f"\ntarget_link_libraries({tgt} {link_scope}react_cxxstableapi)\n"
        if tier == "public" and "CMAKE_CURRENT_SOURCE_DIR" not in text:
            text += (
                "\n# Vend the umbrella as <React/...>: expose the module dir so "
                "the\n# React/ subdir resolves for dependents.\n"
                f"target_include_directories({tgt} {inc_scope} "
                "${CMAKE_CURRENT_SOURCE_DIR})\n"
            )
        if text != orig:
            self._write(cm, text)

    # ---- podspec ---------------------------------------------------------
    def edit_podspec(self, d: Path, tier: str):
        specs = list(d.glob("*.podspec"))
        if not specs:
            self.warn("no podspec")
            return
        spec = specs[0]
        text = orig = spec.read_text()

        if "React-cxxstableapi" not in text:
            text = re.sub(
                r"(resolve_use_frameworks\([^\n]*\)\n)",
                r'\1\n  s.dependency "React-cxxstableapi"\n',
                text,
                count=1,
            )

        if tier == "public" and 'subspec "Umbrella"' not in text:
            if re.search(r's\.exclude_files\s*=\s*"', text):
                text = re.sub(
                    r's\.exclude_files\s*=\s*"([^"]*)"',
                    r's.exclude_files          = ["\1", "React"]',
                    text,
                    count=1,
                )
            elif "exclude_files" not in text:
                text = re.sub(
                    r'(\n\s*s\.header_dir\s*=\s*"[^"]*"\n)',
                    r'\1  s.exclude_files          = "React"\n',
                    text,
                    count=1,
                )
            subspec = (
                '\n  s.subspec "Umbrella" do |ss|\n'
                '    ss.source_files        = "React/*.h"\n'
                '    ss.header_dir          = "React"\n'
                '    ss.header_mappings_dir = "React"\n'
                "  end\n"
            )
            last = text.rfind("\nend")
            text = text[:last] + "\n" + subspec + text[last:]

        if text != orig:
            self._write(spec, text)

    # ---- Android Prefab (central build.gradle.kts) -----------------------
    def edit_gradle(self, d: Path, prefix: str):
        # Find packages/react-native ancestor to locate the gradle file.
        parts = d.parts
        try:
            i = len(parts) - 1 - parts[::-1].index("react-native")
        except ValueError:
            self.warn("cannot locate packages/react-native for gradle edit")
            return
        gradle = Path(*parts[: i + 1]) / "ReactAndroid" / "build.gradle.kts"
        if not gradle.exists():
            self.warn(f"gradle file not found at {gradle}")
            return
        text = gradle.read_text()
        umbrella_pair = (
            f"Pair(\n                          "
            f'"../ReactCommon/{prefix}/React/",\n                          '
            f'"React/",\n                      ),'
        )
        if f'"../ReactCommon/{prefix}/React/"' in text:
            return  # already added
        # Locate the module's existing source Pair and insert after its `),`.
        anchor = f'"../ReactCommon/{prefix}/"'
        pos = text.find(anchor)
        if pos == -1:
            self.warn(
                f"no Prefab entry for {prefix}; if it is Android-exposed, add the "
                f"<React/...> Pair to build.gradle.kts by hand"
            )
            return
        close = text.find("),", pos)
        if close == -1:
            self.warn(f"malformed Prefab entry for {prefix}; add gradle Pair by hand")
            return
        insert_at = close + 2
        new = (
            text[:insert_at]
            + "\n                      "
            + umbrella_pair
            + text[insert_at:]
        )
        if new != text:
            self._write(gradle, new)

    # ---- driver ----------------------------------------------------------
    def run_target(self, d: Path, tier: str, name: str):
        if tier not in GUARD:
            self.warn(f"{d}: bad tier {tier!r}; skipped")
            return
        if not (d / "BUCK").exists():
            self.warn(f"{d}: no BUCK; skipped")
            return
        if tier == "public" and not name:
            self.warn(f"{d}: public tier needs a name; skipped")
            return
        buck = (d / "BUCK").read_text()
        try:
            prefix = self.module_prefix(buck)
        except AttributeError:
            self.warn(f"{d}: no subdir_glob prefix in BUCK; skipped")
            return
        headers = self.public_headers(d)
        print(
            f"\n== {d.name}  tier={tier}  prefix={prefix}  "
            f"headers={[h.name for h in headers]}"
        )
        for h in headers:
            self.add_guard_include(h, GUARD[tier])
        if tier == "public":
            self.write_umbrella(d, prefix, name, headers)
        self.edit_buck(d, tier, name or "")
        self.edit_cmake(d, tier)
        self.edit_podspec(d, tier)
        if tier == "public":
            self.edit_gradle(d, prefix)


def parse_config(path: Path):
    out = []
    for raw in path.read_text().splitlines():
        line = raw.split("#", 1)[0].strip()
        if not line:
            continue
        cols = [c.strip() for c in line.split("|")]
        d, tier = cols[0], cols[1]
        name = cols[2] if len(cols) > 2 else ""
        out.append((d, tier, name))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", help="single target dir")
    ap.add_argument("--tier", choices=list(GUARD))
    ap.add_argument("--name", default="", help="umbrella name (public only)")
    ap.add_argument("--config", help="batch config file: `dir | tier | name?`")
    ap.add_argument("--root", default=".", help="base dir for relative target paths")
    ap.add_argument(
        "--apply", action="store_true", help="write changes (default: dry-run)"
    )
    args = ap.parse_args()

    root = Path(args.root).resolve()
    targets = []
    if args.config:
        targets = parse_config(Path(args.config))
    elif args.target:
        targets = [(args.target, args.tier, args.name)]
    else:
        ap.error("provide --target/--tier or --config")

    cm = Codemod(apply=args.apply)
    print("MODE:", "APPLY" if args.apply else "DRY-RUN")
    for d, tier, name in targets:
        p = Path(d)
        if not p.is_absolute():
            p = (root / d).resolve()
        cm.run_target(p, tier, name)

    print(
        f"\nsummary: {len(cm.changed)} file(s) "
        f"{'written' if args.apply else 'would change'}, "
        f"{len(cm.warnings)} warning(s)"
    )
    if not args.apply:
        print("dry-run only; re-run with --apply to write, then `arc f`.")


if __name__ == "__main__":
    main()
