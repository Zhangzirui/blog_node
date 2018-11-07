const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const resolve = (filePath) => path.resolve(__dirname, filePath);

module.exports = merge(common, {
    mode: 'development',
    entry: {
        server: '../src/server.js'
    },
    output: {
        path: resolve('../node'),
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(['server'], {
            root: resolve('../')
        })
    ],
    target: 'node'
});
