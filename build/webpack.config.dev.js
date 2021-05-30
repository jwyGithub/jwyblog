const { HotModuleReplacementPlugin, DefinePlugin, ProgressPlugin } = require('webpack');
const webpackConfig = require('./webpack.config.base');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const address = require('address');

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: resolve(__dirname, '../'),
        open: true,
        compress: true,
        hot: true,
        host: address.ip(),
        port: 2021,
        publicPath: '/',
        stats: 'errors-warnings',
        quiet: true
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshPlugin(),
        new ProgressPlugin(),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
});
