const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

    context: path.resolve(__dirname, 'src'),

    entry: './index.jsx',

    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'production-build'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: ["babel-plugin-transform-react-jsx"]
                }
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
                        localIdentName: '[hash:base64:5]',
                    },
                }
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devtool: 'eval',
    
};