#!/bin/bash
# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

ROLLUP_PATH=$(dirname "$0")/../../packages/react-native/types/rollup.d.ts
DIFF_OUTPUT=$(git diff HEAD^ HEAD -- $ROLLUP_PATH)

echo $DIFF_OUTPUT

echo "Checking if rollup.d.ts has changed"
if [ -z "$DIFF_OUTPUT" ]; then
  echo "No changes to rollup.d.ts"
  exit 0
else
    echo "Changes detected in rollup.d.ts"
    # echo "exit_code=1" >> $GITHUB_OUTPUT
    exit 1
fi
