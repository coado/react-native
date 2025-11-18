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

const {
  replaceConfiguration,
  shouldReplaceConfiguration,
  updateLastBuildConfiguration,
  validateBuildConfiguration,
  validateVersion,
} = require('./replace-build-utils');
const yargs = require('yargs');

const LAST_BUILD_FILENAME = 'React-Core-prebuilt/.last_build_configuration';

function replaceRNCoreConfiguration(
  configuration /*: string */,
  version /*: string */,
  podsRoot /*: string */,
) {
  // Filename comes from rncore.rb
  const tarballPath = `${podsRoot}/ReactNativeCore-artifacts/reactnative-core-${version.toLowerCase()}-${configuration.toLowerCase()}.tar.gz`;
  const finalLocation = 'React-Core-prebuilt';

  replaceConfiguration(tarballPath, finalLocation);
}

function main(
  configuration /*: string */,
  version /*: string */,
  podsRoot /*: string */,
) {
  validateBuildConfiguration(configuration);
  validateVersion(version);

  if (
    !shouldReplaceConfiguration(
      LAST_BUILD_FILENAME,
      configuration,
      'React-Core-prebuilt',
    )
  ) {
    return;
  }

  replaceRNCoreConfiguration(configuration, version, podsRoot);
  updateLastBuildConfiguration(LAST_BUILD_FILENAME, configuration);
  console.log('Done replacing React Native prebuilt');
}

// This script is executed in the Pods folder, which is usually not synched to Github, so it should be ok
const argv = yargs
  .option('c', {
    alias: 'configuration',
    description:
      'Configuration to use to download the right React-Core prebuilt version. Allowed values are "Debug" and "Release".',
  })
  .option('r', {
    alias: 'reactNativeVersion',
    description:
      'The Version of React Native associated with the React-Core prebuilt tarball.',
  })
  .option('p', {
    alias: 'podsRoot',
    description: 'The path to the Pods root folder',
  })
  .usage('Usage: $0 -c Debug -r <version> -p <path/to/react-native>').argv;

// $FlowFixMe[prop-missing]
const configuration = argv.configuration;
// $FlowFixMe[prop-missing]
const version = argv.reactNativeVersion;
// $FlowFixMe[prop-missing]
const podsRoot = argv.podsRoot;

main(configuration, version, podsRoot);
