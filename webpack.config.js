const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    context: path.resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch',
        './reducers/index.js'
    ],

    output: {
        filename: 'bundle.js',
        path:  path.resolve(__dirname, 'build'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js']
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
            test: /\.(ttf|eot|svg|woff|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader",
            options: {
                name: '[path][name].[ext]'
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
                        camelCase: 'only',
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            title: 'Movie roulette'
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.devtool = 'eval';
  config.devServer = {
    hot: true,
    port: 3000,
    historyApiFallback: true
  };
  config.watch = true;
};

module.exports = config;
