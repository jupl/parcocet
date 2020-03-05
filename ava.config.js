/** Ava configuration. */
// eslint-disable-next-line import/no-default-export
export default {
  extensions: ['js', 'ts', 'tsx'],
  files: ['src/**/{*.,}test.*'],
  require: [
    'esm',
    'tsconfig-paths/register',
    'ts-node/register/transpile-only',
    'source-map-support/register',
    'browser-env/register',
  ],
}
