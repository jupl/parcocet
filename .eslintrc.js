'use strict'

module.exports = {
  ...require('@jupl/ts/lint'),
  ignorePatterns: [
    '.parcel-cache/',
    '.yarn/',
    '.eslintrc.js',
    'coverage/',
    'dist/',
  ],
}
