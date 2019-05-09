'use strict';

const webpack = require('webpack');
const Merge = require('webpack-merge');
const ip = require('ip');
const CommonConfig = require('./webpack.common.js');
const paths = require('./paths');

module.exports = Merge.smartStrategy({
    entry: 'replace'
})(CommonConfig, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: paths.appBuild
    },
    devServer: {
        disableHostCheck: true,
        compress: true,
        clientLogLevel: 'none',
        contentBase: paths.appPublic,
        watchContentBase: true,
        hot: true,
        publicPath: '/',
        historyApiFallback: {
            disableDotRule: true,
            index: '/'
        },
        quiet: true,
        index: 'preview.html',
        open: true,
        port: 3000,
        host: '0.0.0.0',
        useLocalIp: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
});

const address = `http://localhost:3000/`;
const networkAddress = `http://${ip.address()}:3000/`;
console.log(`
    Project has started

    Local:  \x1b[36m ${address} \x1b[0m
    Network:\x1b[36m ${networkAddress}\x1b[0m
`);
