const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');
const resolve = (filePath) => path.resolve(__dirname, filePath);
const includePath = resolve('../src');
const excludePath = resolve('../node_modules');
const isPrd = process.env.NODE_ENV === 'production';

module.exports = merge(common, {
    mode: isPrd ? 'production' : 'development',
    entry: {
        home: '../src/pages/home',
        detail: '../src/pages/detail'
    },
    output: {
        path: resolve('../dist'),
        filename: isPrd ? '[name].[chunkhash:8].js' : '[name].js'
    },
    devServer: {
        contentBase: './dist',
        port: 8000,
        index: 'home.html',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: includePath,
                exclude: excludePath,
                use: [
                    isPrd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: resolve('../')
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: '../index.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            filename: 'detail.html',
            template: '../index.html',
            chunks: ['detail']
        }),
        new MiniCssExtractPlugin({
            filename: isPrd ? '[name].[chunkhash:8].css' : '[name].css'
        })
    ]
});
