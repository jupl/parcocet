'use strict'

module.exports = {
  extends: './node_modules/@jupl/ts/lint',
  ignorePatterns: ['.parcel-cache/', 'dist/'],
  rules: {
    'import/no-named-as-default-member': false,
  },
}
