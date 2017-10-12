const path = require('path')
const webpack = require('webpack')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  entry: [
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: true,
        exclude: /node_modules/,
      }),
    ],
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /\.\.\/store/,
      path.resolve(__dirname, 'overrides/store.js')
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /doc\/.*\.md$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'raw-loader'],
        include: __dirname
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            }
          },
        ],
        include: path.join(__dirname, 'src')
      },
    ]
  }
}
