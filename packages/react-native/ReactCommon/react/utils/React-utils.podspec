# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

require "json"

package = JSON.parse(File.read(File.join(__dir__, "..", "..", "..", "package.json")))
version = package['version']

source = { :git => 'https://github.com/facebook/react-native.git' }
if version == '1000.0.0'
  # This is an unpublished version, use the latest commit hash of the react-native repo, which we’re presumably in.
  source[:commit] = `git rev-parse HEAD`.strip if system("git rev-parse --git-dir > /dev/null 2>&1")
else
  source[:tag] = "v#{version}"
end

Pod::Spec.new do |s|
  source_files = ["*.{m,mm,cpp,h}", "platform/ios/**/*.{m,mm,cpp,h}"]
  header_search_paths = [
    "\"$(PODS_TARGET_SRCROOT)/../../\"",
  ]

  s.name                   = "React-utils"
  s.version                = version
  s.summary                = "-"  # TODO
  s.homepage               = "https://reactnative.dev/"
  s.license                = package["license"]
  s.author                 = "Meta Platforms, Inc. and its affiliates"
  s.platforms              = min_supported_versions
  s.source                 = source
  s.source_files           = podspec_sources(source_files, ["*.h", "platform/ios/**/*.h"])
  s.header_dir             = "react/utils"
  s.exclude_files          = "tests"

  if ENV['USE_FRAMEWORKS']
    s.module_name            = "React_utils"
    s.header_mappings_dir  = "../.."
    header_search_paths = header_search_paths + ["\"$(PODS_TARGET_SRCROOT)/platform/ios\""]
  end

  s.pod_target_xcconfig    = { "USE_HEADERMAP" => "NO",
                               "CLANG_CXX_LANGUAGE_STANDARD" => rct_cxx_language_standard(),
                               "HEADER_SEARCH_PATHS" => header_search_paths.join(' '),
                               "DEFINES_MODULE" => "YES" }

  s.dependency "React-jsi", version

  depend_on_js_engine(s)
  add_rn_third_party_dependencies(s)

  add_dependency(s, "React-debug")
end
