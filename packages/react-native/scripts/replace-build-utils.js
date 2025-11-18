/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const {spawnSync} = require('child_process');
const fs = require('fs');

function validateBuildConfiguration(configuration /*: string */) {
  if (!['Debug', 'Release'].includes(configuration)) {
    throw new Error(`Invalid configuration ${configuration}`);
  }
}

function validateVersion(version /*: ?string */) {
  if (version == null || version === '') {
    throw new Error('Version cannot be empty');
  }
}

function shouldReplaceConfiguration(
  lastBuildFilename /*: string */,
  configuration /*: string */,
  componentName /*: string */,
) /*: boolean */ {
  const fileExists = fs.existsSync(lastBuildFilename);

  if (fileExists) {
    console.log(`Found ${lastBuildFilename} file`);
    const oldConfiguration = fs.readFileSync(lastBuildFilename).toString();
    if (oldConfiguration === configuration) {
      console.log(
        `Same config of the previous build. No need to replace ${componentName}`,
      );
      return false;
    }
  }

  // Assumption: if there is no stored last build, we assume that it was build for debug.
  if (!fileExists && configuration === 'Debug') {
    console.log(
      `No previous build detected, but Debug Configuration. No need to replace ${componentName}`,
    );
    return false;
  }

  return true;
}

function replaceConfiguration(
  tarballPath /*: string */,
  finalLocation /*: string */,
  postExtractCallback /*: ?() => void */,
) {
  console.log('Preparing the final location', finalLocation);
  fs.rmSync(finalLocation, {force: true, recursive: true});
  fs.mkdirSync(finalLocation, {recursive: true});

  console.log('Extracting the tarball', tarballPath);
  spawnSync('tar', ['-xf', tarballPath, '-C', finalLocation], {
    stdio: 'inherit',
  });

  if (postExtractCallback != null) {
    postExtractCallback();
  }
}

function updateLastBuildConfiguration(
  lastBuildFilename /*: string */,
  configuration /*: string */,
) {
  console.log(`Updating ${lastBuildFilename} with ${configuration}`);
  fs.writeFileSync(lastBuildFilename, configuration);
}

module.exports = {
  validateBuildConfiguration,
  validateVersion,
  shouldReplaceConfiguration,
  replaceConfiguration,
  updateLastBuildConfiguration,
};
