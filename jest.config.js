'use strict'

const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', 'story', 'stories'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: '@jupl/ts',
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!(@storybook/addon-storyshots)/)'],
}
