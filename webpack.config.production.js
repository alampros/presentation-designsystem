const webpack = require('webpack')

const devConfig = require('./webpack.config.js')

module.exports = {
  ...devConfig,
  devtool: false,
  entry: [
    './index'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
}
