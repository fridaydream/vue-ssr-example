const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const { VueLoaderPlugin } = require('vue-loader');
// const webpackHtmlPlugin = require('html-webpack-plugin');
//webpack4.20以上用mini-css-extract-plugin代替html-webpack-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');

const VueServerPlugin = require('vue-server-renderer/server-plugin')

let config
config = merge(baseConfig, {
  target: 'node',
  devtool: 'source-map',
  entry: path.join(__dirname, '../client/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build'),
    publicPath: '/public/'
  },
  //不打包这些文件
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [{
      test: /\.styl/,
      use: [
      MiniCssExtractPlugin.loader,
        'css-loader', {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    }]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin()
  ]
})
module.exports = config;
