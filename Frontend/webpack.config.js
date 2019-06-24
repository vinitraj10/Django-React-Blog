const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist/js');

const config = {
  entry: [
    'core-js/modules/es6.promise',
    'core-js/modules/es6.array.iterator',
    `${APP_DIR}/index.js`,
  ],
  output: {
    path: BUILD_DIR,
    publicPath: '/dist/js/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;
