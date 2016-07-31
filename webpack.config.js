const {join} = require('path');

module.exports = (env) => {
  return {
    entry: {
      'polyfills': './polyfills.ts',
      'vendor': './vendor.ts',
      'app': './index.ts',
    },
    output: {
      filename: '[name].bundle.js',
      sourceMapFileName: '[name].map',
      chunkFileName: '[id].chunk.js'
    },
    resolve: {
      extensions: ['', '.ts', '.js', '.css', '.html'],
      modulesDirectories: ['node_modules']
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css!'
        },
        {
          test: /\.ts$/,
          exclude: /(node_modules)/,
          loader: 'awesome-typescript-loader'
        }
      ]
    }
  }
}
