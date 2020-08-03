/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

type Configuration = import('webpack').Configuration

exports.addons = [
  '@storybook/addon-a11y',
  '@storybook/addon-actions',
  '@storybook/addon-knobs',
  '@storybook/addon-viewport',
]

exports.stories = [
  '../client/**/story.tsx',
  '../client/**/stories.tsx',
  '../client/**/*.story.tsx',
  '../client/**/*.stories.tsx',
]

exports.webpackFinal = (config: Configuration): Configuration => ({
  ...config,
  resolve: {
    ...config.resolve,
    plugins: [...(config.resolve?.plugins ?? []), new TSConfigPathsPlugin()],
  },
})
