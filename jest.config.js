'use strict'

const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: '@jupl/ts',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
}
