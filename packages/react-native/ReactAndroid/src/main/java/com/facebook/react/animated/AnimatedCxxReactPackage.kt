/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 package com.facebook.react.animated
 import com.facebook.jni.HybridData
 import com.facebook.react.bridge.ReactApplicationContext
 import com.facebook.react.runtime.cxxreactpackage.CxxReactPackage
 import com.facebook.soloader.SoLoader
 
 public class AnimatedCxxReactPackage(public val context: ReactApplicationContext) : CxxReactPackage(null) {
  init {
   mHybridData = initHybrid()
  }
 
  private external fun initHybrid(): HybridData
 
  public companion object {
   init {
    SoLoader.loadLibrary("react_animatedjni")
   }
  }
 }