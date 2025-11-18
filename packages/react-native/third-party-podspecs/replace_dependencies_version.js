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
} = require('../scripts/replace-build-utils');
const fs = require('fs');
const yargs = require('yargs');

const LAST_BUILD_FILENAME = 'ReactNativeDependencies/.last_build_configuration';

function replaceRNDepsConfiguration(
  configuration /*: string */,
  version /*: string */,
  podsRoot /*: string */,
) {
  const tarballPath = `${podsRoot}/ReactNativeDependencies-artifacts/reactnative-dependencies-${version.toLowerCase()}-${configuration.toLowerCase()}.tar.gz`;
  const finalLocation = 'ReactNativeDependencies/framework';

  replaceConfiguration(tarballPath, finalLocation, () => {
    // Now we need to remove the extra third-party folder as we do in the podspec's prepare-script
    // We need to take the ReactNativeDependencies.xcframework folder and move it up one level
    // from ${finalLocation}/packages/react-native/third-party/ to ${finalLocation}/packages/react-native/
    console.log(
      'Resolving ReactNativeDependencies.xcframework folder structure',
    );
    const thirdPartyPath = `${finalLocation}/packages/react-native/third-party`;
    const sourcePath = `${thirdPartyPath}/ReactNativeDependencies.xcframework`;
    const destinationPath = `${finalLocation}/packages/react-native/ReactNativeDependencies.xcframework`;
    if (fs.existsSync(sourcePath)) {
      fs.renameSync(sourcePath, destinationPath);
    } else {
      throw new Error(
        `Expected ReactNativeDependencies.xcframework to be at ${sourcePath}, but it was not found.`,
      );
    }

    if (fs.existsSync(thirdPartyPath)) {
      fs.rmSync(thirdPartyPath, {force: true, recursive: true});
    }
  });
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
      'RNDeps',
    )
  ) {
    return;
  }

  replaceRNDepsConfiguration(configuration, version, podsRoot);
  updateLastBuildConfiguration(LAST_BUILD_FILENAME, configuration);
  console.log('Done replacing React Native Dependencies');
}

// This script is executed in the Pods folder, which is usually not synched to Github, so it should be ok
const argv = yargs
  .option('c', {
    alias: 'configuration',
    description:
      'Configuration to use to download the right React Native Dependencies version. Allowed values are "Debug" and "Release".',
  })
  .option('r', {
    alias: 'reactNativeVersion',
    description:
      'The Version of React Native associated with the React Native Dependencies tarball.',
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
