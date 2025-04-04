/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 * @oncall react_native
 */

require('../babel-register').registerForScript();
const detectBreakingChange = require('./detectBreakingChange');

async function main() {
  await detectBreakingChange();
}

main().catch(console.error);
