/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
#include "AnimatedCxxReactPackage.h"
#include <react/jni/JWeakRefUtils.h>
#include <react/renderer/animated/AnimatedModule.h>

namespace facebook::react {

AnimatedCxxReactPackage::AnimatedCxxReactPackage(
    jni::alias_ref<AnimatedCxxReactPackage::javaobject> jobj) {}

jni::local_ref<AnimatedCxxReactPackage::jhybriddata>
AnimatedCxxReactPackage::initHybrid(
    jni::alias_ref<AnimatedCxxReactPackage::javaobject> jobj) {
  return makeCxxInstance(jobj);
}

void AnimatedCxxReactPackage::registerNatives() {
  registerHybrid({
      makeNativeMethod("initHybrid", AnimatedCxxReactPackage::initHybrid),
  });
}

std::shared_ptr<TurboModule> AnimatedCxxReactPackage::getModule(
    const std::string& moduleName,
    const std::shared_ptr<CallInvoker>& jsInvoker) {
  if (moduleName == "NativeAnimatedModule") {
    return std::make_shared<AnimatedModule>(
        jsInvoker, getNativeAnimatedNodesManagerProvider());
  }

  return nullptr;
}

std::shared_ptr<NativeAnimatedNodesManagerProvider>
AnimatedCxxReactPackage::getNativeAnimatedNodesManagerProvider() {
  if (auto provider = nativeAnimatedNodesManagerProvider_.lock()) {
    return provider;
  }

  auto nativeAnimatedNodesManagerProvider =
      std::make_shared<NativeAnimatedNodesManagerProvider>(
          [](std::function<void()>&& cb, bool) { cb(); }, [](bool) {});

  nativeAnimatedNodesManagerProvider_ = nativeAnimatedNodesManagerProvider;
  return nativeAnimatedNodesManagerProvider;
}

} // namespace facebook::react