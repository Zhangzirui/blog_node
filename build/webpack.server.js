const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const resolve = (filePath) => path.resolve(__dirname, filePath);
// const includePath = resolve('../src');
// const excludePath = resolve('../node_modules');
let nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = merge(common, {
    mode: 'development',
    entry: {
        server: '../src/server.js'
    },
    output: {
        path: resolve('../node'),
        filename: '[name].js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.scss$/,
    //             include: includePath,
    //             exclude: excludePath,
    //             use: [
    //                 'style-loader',
    //                 'css-loader',
    //                 {
    //                     loader: 'postcss-loader',
    //                     options: {
    //                         plugins: [
    //                             require('autoprefixer')
    //                         ]
    //                     }
    //                 },
    //                 'sass-loader'
    //             ]
    //         }
    //     ]
    // },
    plugins: [
        new CleanWebpackPlugin(['server'], {
            root: resolve('../')
        })
    ],
    target: 'node',
    externals: nodeModules,
    node: {
        __filename: false,
        __dirname: false
    }
});
