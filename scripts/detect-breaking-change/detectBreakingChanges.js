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

const {REPO_ROOT} = require('../../consts');
const babel = require('@babel/core');
const generate = require('@babel/generator').default;
const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const ROLLUP_PATH = path.join(REPO_ROOT, 'api-rollup.d.ts');
const BREAKING = true;
const NOT_BREAKING = false;

async function findBreakingChanges() {
  console.log('Checking if rollup has changed');
  // const {oldRollup, newRollup} = getRollups();

//   const oldRollupAST = babel.parseSync(oldRollup, {
//     plugins: ['@babel/plugin-syntax-typescript'],
//   });
//   const newRollupAST = babel.parseSync(newRollup, {
//     plugins: ['@babel/plugin-syntax-typescript'],
//   });

//   const oldStatements = oldRollupAST.program.body;
//   const newStatements = newRollupAST.program.body;
//   analyzeStatements(oldStatements, newStatements);
}

function analyzeStatements(
  oldStatements: Array<BabelNodeStatement>,
  newStatements: Array<BabelNodeStatement>,
): boolean {
  const cache = {
    old: {
      internal: [],
      external: [],
    },
    new: {
      internal: [],
      external: [],
    },
  } as {
    old: {
      internal: Array<BabelNodeExportNamedDeclaration>,
      external: Array<BabelNodeExportNamedDeclaration>,
    },
    new: {
      internal: Array<BabelNodeExportNamedDeclaration>,
      external: Array<BabelNodeExportNamedDeclaration>,
    },
  };
  //   let detectedNewStatements = false;

  // ImportDeclaration should not have impact on the API
  // If the imported type is used, it will be compared in the next steps
  const oldStatementsFiltered = oldStatements.filter(
    statement => statement.type !== 'ImportDeclaration',
  );
  const newStatementsFiltered = newStatements.filter(
    statement => statement.type !== 'ImportDeclaration',
  );

  //   if (newStatementsFiltered.length > oldStatementsFiltered.length) {
  //     console.log('New statements found');
  //     detectedNewStatements = true;
  //   }

  const categorize = (statements: any, mapping: any) => {
    statements.forEach(statement => {
      if (statement.type === 'ExportNamedDeclaration') {
        mapping.external.push(statement);
      } else {
        mapping.internal.push(statement);
      }
    });
  };

  categorize(oldStatementsFiltered, cache.old);
  categorize(newStatementsFiltered, cache.new);

  if (cache.new.external.length < cache.old.external.length) {
    console.log('External statements removed');
    return BREAKING;
  }

  // Create mapping between old and new statements
  type Pair = Map<'old' | 'new', BabelNodeExportNamedDeclaration>;
  const mapping: Array<[string, Pair]> = [];
  const oldNodesMapping = getExportedNodesNames(cache.old.external);
  const newNodesMapping = Object.fromEntries(
    getExportedNodesNames(cache.new.external),
  );

  for (const [name, oldNode] of oldNodesMapping) {
    if (newNodesMapping[name]) {
      const pairMap: Pair = new Map();
      pairMap.set('new', newNodesMapping[name]);
      pairMap.set('old', oldNode);
      mapping.push([name, pairMap]);
    } else {
      // There is no statement of that name in new rollup which means that:
      // 1. This statement was entirely removed
      // 2. This statement was renamed
      // 3. It is not public anymore
      return BREAKING;
    }
  }

  // TODO: Check if paired statements are equal
  let isBreaking = false;
  for (const [name, pair] of mapping) {
    const oldNode = pair.get('old');
    const newNode = pair.get('new');
    if (!oldNode || !newNode) {
      throw new Error('Node in pair is undefined');
    }
    const isDiff = didStatementChange(oldNode, newNode);
    if (isDiff) {
      console.log(`Breaking change detected for ${name}`);
      isBreaking = true;
    }
  }

  if (isBreaking) return BREAKING;

  return NOT_BREAKING;
}

function getExportedNodesNames(nodes: Array<BabelNodeExportNamedDeclaration>) {
  const nodeNames = [];
  nodes.forEach(node => {
    if (node.declaration) {
      const name = getExportedNodeName(node);
      nodeNames.push([name, node]);
    }
  });

  return nodeNames;
}

function getExportedNodeName(node: BabelNodeExportNamedDeclaration): string {
  if (node.declaration?.type === 'TSTypeAliasDeclaration') {
    return node.declaration.id.name;
  } else if (node.declaration?.type === 'VariableDeclaration') {
    if (node.declaration.declarations.length !== 1) {
      throw new Error('Unsupported number of variable declarations');
    }
    const variableDeclaration = node.declaration.declarations[0];
    if (variableDeclaration.id.type !== 'Identifier') {
      throw new Error('Variable declaration id type is not Identifier');
    }

    return variableDeclaration.id.name;
  } else if (node.declaration?.type === 'ClassDeclaration') {
    if (!node.declaration.id) {
      throw new Error('Class declaration id is undefined');
    }

    return node.declaration.id.name;
  } else if (node.declaration?.type === 'TSModuleDeclaration') {
    if (node.declaration.id.type === 'StringLiteral') {
      return node.declaration.id.value;
    } else {
      return node.declaration.id.name;
    }
  } else if (node.declaration?.type === 'TSDeclareFunction') {
    if (!node.declaration.id) {
      throw new Error('Function declaration id is undefined');
    }
    return node.declaration.id?.name;
  } else if (node.declaration?.type === 'TSInterfaceDeclaration') {
    return node.declaration.id.name;
  }

  throw new Error('Unsupported node declaration type');
}

function didStatementChange(
  oldAST: BabelNodeStatement,
  newAST: BabelNodeStatement,
) {
  const oldCode = getMinifiedCode(oldAST);
  const newCode = getMinifiedCode(newAST);
  return oldCode !== newCode;
}

function getMinifiedCode(ast: BabelNodeStatement) {
  return generate(ast, {
    minified: true,
  }).code;
}

function getRollups() {
  // TODO: Get rollups from the git diff
  const oldRollupPath = path.join(__dirname, 'rollups/rollup_old.d.ts');
  const newRollupPath = path.join(__dirname, 'rollups/rollup_new.d.ts');
  const oldRollup = fs.readFileSync(oldRollupPath, 'utf8');
  const newRollup = fs.readFileSync(newRollupPath, 'utf8');
  return {oldRollup, newRollup};
}

function hasRollupChanged() {
  try {
    const stat = execSync(`git diff --shortstat ${ROLLUP_PATH}`, {
      encoding: 'utf8',
    });
    console.log({stat});
  } catch (error) {
    console.error(error);
  }
}

module.exports = findBreakingChanges;
