# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

require "json"

package = JSON.parse(File.read(File.join(__dir__, "..", "..", "package.json")))
version = package['version']

source = { :git => 'https://github.com/facebook/react-native.git' }
if version == '1000.0.0'
  # This is an unpublished version, use the latest commit hash of the react-native repo, which we’re presumably in.
  source[:commit] = `git rev-parse HEAD`.strip if system("git rev-parse --git-dir > /dev/null 2>&1")
else
  source[:tag] = "v#{version}"
end

header_search_paths = [
    "\"$(PODS_TARGET_SRCROOT)/../../ReactCommon\"",
    "\"$(PODS_ROOT)/Headers/Public/React-Core\"",
    "\"$(PODS_ROOT)/Headers/Private/Yoga\""
]

Pod::Spec.new do |s|
  s.name                   = "React-RCTAnimatedModuleProvider"
  s.version                = version
  s.summary                = "Animated TurboModule provider for iOS (bridgeless)"
  s.homepage               = "https://reactnative.dev/"
  s.license                = package["license"]
  s.author                 = "Meta Platforms, Inc. and its affiliates"
  s.platforms              = min_supported_versions
  s.source                 = source
  s.source_files           = podspec_sources("*.{m,mm}", "**/*.h")
  s.public_header_files    = "*.h"
  s.preserve_paths         = "package.json", "LICENSE", "LICENSE-docs"
  s.header_dir             = "RCTAnimatedModuleProvider"
  s.pod_target_xcconfig    = {
                               "USE_HEADERMAP" => "YES",
                               "CLANG_CXX_LANGUAGE_STANDARD" => rct_cxx_language_standard(),
                            #    "HEADER_SEARCH_PATHS" => '$(inherited) "$(PODS_ROOT)/Headers/Public/Yoga" "$(PODS_ROOT)/Headers/Private/Yoga"'
                                 "HEADER_SEARCH_PATHS" => header_search_paths.join(' ')
                             }

#   resolve_use_frameworks(s, header_mappings_dir: "./", module_name: "React_RCTAnimatedModuleProvider")
  resolve_use_frameworks(s, header_mappings_dir: "./")


  # Dependencies needed for TurboModule types and feature flags access
  s.dependency "React-Core"
  s.dependency "React-jsi"
  add_dependency(s, "ReactCommon", :subspec => "turbomodule/core")
  add_dependency(s, "React-callinvoker")
  add_dependency(s, "React-featureflags")
  add_dependency(s, "React-Fabric", :subspec => "animated", :additional_framework_paths => ["react/renderer/animated"])
  add_dependency(s, "Yoga")

  add_rn_third_party_dependencies(s)
  add_rncore_dependency(s)
end


