/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <ReactCommon/CxxReactPackage.h>
#include <fbjni/fbjni.h>
#include <react/renderer/animated/NativeAnimatedNodesManagerProvider.h>

namespace facebook::react {
class AnimatedCxxReactPackage
    : public jni::HybridClass<AnimatedCxxReactPackage, CxxReactPackage> {
 public:
  static constexpr auto kJavaDescriptor =
      "Lcom/facebook/react/animated/AnimatedCxxReactPackage;";

  static jni::local_ref<jhybriddata> initHybrid(
      jni::alias_ref<facebook::react::AnimatedCxxReactPackage::javaobject>
          jobj);

  static void registerNatives();

  AnimatedCxxReactPackage(
      jni::alias_ref<AnimatedCxxReactPackage::javaobject> jobj);

  std::shared_ptr<TurboModule> getModule(
      const std::string& moduleName,
      const std::shared_ptr<CallInvoker>& jsInvoker) override;

 private:
  std::weak_ptr<NativeAnimatedNodesManagerProvider>
      nativeAnimatedNodesManagerProvider_;

  std::shared_ptr<NativeAnimatedNodesManagerProvider>
  getNativeAnimatedNodesManagerProvider();

  friend HybridBase;
  using HybridBase::HybridBase;
};
} // namespace facebook::react
