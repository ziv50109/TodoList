'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
    entry: {
        app: paths.appIndexJs
    },
    module: {
        rules: [
            {
                test: /\.css$|\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.js?$|\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin(['ENV']),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            filename: 'preview.html'
        })
    ],
    resolve: {
        alias: {
            '@magaele': paths.magaele
        }
    },
    optimization: { // 使用可參考: https://juejin.im/post/5b99b9cd6fb9a05cff32007a
        splitChunks: {
            chunks: 'async',    // 'async', 'initial', 'all'
            minSize: 66666,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'commons',
                    // chunks: 'initial',
                },
                magaele: {
                    test: /magaele/,
                    name: 'magaele',
                    // chunks: 'async',
                }
            }
        }
    }
};
