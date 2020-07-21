'use strict'

module.exports = {
  extends: require.resolve('@jupl/ts/lint'),
  ignorePatterns: ['.parcel-cache/', 'coverage/', 'dist/'],
}
