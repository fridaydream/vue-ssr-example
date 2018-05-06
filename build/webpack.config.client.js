const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const { VueLoaderPlugin } = require('vue-loader');
const webpackHtmlPlugin = require('html-webpack-plugin');
//webpack4.20以上用mini-css-extract-plugin代替html-webpack-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const defaultPlugins = [new VueLoaderPlugin(),
  new webpackHtmlPlugin({
    template: path.join(__dirname, 'template.html')
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new VueClientPlugin()
]
const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  //不加会404
  historyApiFallback: {
    index: '/index.html'
  },
  hot: true
  // open:true
}
if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [{
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }]
    },
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/client-entry.js')
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      publicPath: '/public/'
    },
    module: {
      rules: [{
        test: /\.styl/,
        use: [MiniCssExtractPlugin.loader,
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
    optimization: {
      splitChunks: {
        cacheGroups: { // 这里开始设置缓存的 chunks
          commons: {
            chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
            minSize: 0, // 最小尺寸，默认0,
            minChunks: 2, // 最小 chunk ，默认1
            maxInitialRequests: 5 // 最大初始化请求书，默认1
          },
          vendor: {
            test: /node_modules/, // 正则规则验证，如果符合就提取 chunk
            chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
            name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
            priority: 10, // 缓存组优先级
            enforce: true
          }
        }
      },
      runtimeChunk: true
    },
    plugins: defaultPlugins.concat([new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })])
  })
}

module.exports = config;
