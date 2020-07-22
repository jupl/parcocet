'use strict'

const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', 'story', 'stories'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  preset: '@jupl/ts',
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!(@storybook/addon-storyshots)/)'],
}
