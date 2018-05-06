const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const createVueLoaderOptions = require('./vue-loader.config');
const config = {
    mode: process.env.NODE_ENV || 'production', //development production
    target: 'web',
    entry: path.join(__dirname, '../client/client-entry.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        // path: path.join(__dirname, '../dist'),
        publicPath: 'http://127.0.0.1:8000/public/',
        path: path.join(__dirname, '../public')
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                //https://github.com/nuxt/nuxt.js/issues/1628,加这句话自动修复
                options:{
                    fix:true
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: createVueLoaderOptions(isDev)
            },
            {
                test: /\.css/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // this will apply to both plain .css files
            // AND <style> blocks in vue files

            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'resources/[path][name].[hash:8].[ext]'
                    }
                }]
            }
        ]
    }
}

module.exports = config;
