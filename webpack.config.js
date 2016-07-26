'use strict';

const webpack = require('webpack');

const env = process.env.NODE_ENV;

const plugins = [new webpack.NoErrorsPlugin()];

if (env === 'production')
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: true }));

module.exports = {
  entry: __dirname + '/src/main/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'monads.js',
    library: 'M',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  eslint: {
    failOnWarning: false,
    failOnError: true
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
