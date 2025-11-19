# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

include(${REACT_ANDROID_DIR}/src/main/jni/first-party/jni-lib-merge/SoMerging-utils.cmake)
include(${REACT_COMMON_DIR}/cmake-utils/react-native-flags.cmake)

file(GLOB react_animatedjni_SRC CONFIGURE_DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/*.cpp)

add_library(react_animatedjni OBJECT ${react_animatedjni_SRC})

target_include_directories(react_animatedjni PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_merge_so(react_animatedjni)

target_link_libraries(react_animatedjni
        fbjni
        react_codegen_rncore
        react_debug
        react_renderer_core
        react_renderer_graphics
        react_renderer_mounting
        react_renderer_uimanager
        react_renderer_scheduler
        react_renderer_animationbackend
        react_cxxreactpackage
        glog
        folly_runtime)

target_compile_reactnative_options(react_animatedjni PRIVATE)
