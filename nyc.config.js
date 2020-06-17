'use strict'

module.exports = {
  branches: 100,
  'check-coverage': true,
  exclude: ['**/{*.,}test.{j,t}s{x,}'],
  extends: '@istanbuljs/nyc-config-typescript',
  functions: 100,
  lines: 100,
  require: ['esm', 'ts-node/register/transpile-only'],
  statements: 100,
}
