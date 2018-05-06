const path = require('path');
const webpack = require('webpack');
// const isDev = process.env.NODE_ENV === 'development';
const { VueLoaderPlugin } = require('vue-loader');
const webpackHtmlPlugin = require('html-webpack-plugin');
//webpack4.20以上用mini-css-extract-plugin代替html-webpack-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');


const defaultPlugins = [new VueLoaderPlugin(),
    new webpackHtmlPlugin({
        template:path.join(__dirname,'./template.html')
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    })
]
const devServer = {
    port: 8008,
    host: '0.0.0.0',
    overlay: {
        errors: true,
    },
    hot: true
    // open:true
}
config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    entry:path.join(__dirname,'../practice/index.js'),
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
    //import Vue from 'vue'
    resolve:{
        alias:{
            'vue' :path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin()
        // new webpack.NoEmitOnErrorsPlugin()
    ])
})

module.exports = config;
