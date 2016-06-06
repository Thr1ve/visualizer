/* eslint-disable */

var webpack = require('webpack');
var chalk = require('chalk');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
  entry: [
    './src/index.js',
  ],

  output: {
    path: __dirname + '/lib',
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },

  externals: {
  'react': 'react',
  'react-dom': 'react-dom'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'}
    ]
  },

  plugins: [
    new ProgressBarPlugin({
      format: `building... [${chalk.green(':bar')}] ${chalk.magenta.bold(':percent')} (${chalk.yellow.bold(':elapsed seconds')})`,
      clear: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
