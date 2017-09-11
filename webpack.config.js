const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch',
        './index.js'
    ],

    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'build'),
    },

    resolve: {
        extensions: ['.js']
    },

    devServer: {
        hot: true,
        port: 3000
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(ttf|eot|svg|woff|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader",
            options: {
                name: '[path][name].[ext]?[hash]'
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        camelCase: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            })
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            title: 'Movie roulette'
        })
    ],
    devtool: 'eval',
    
    watch: true
};