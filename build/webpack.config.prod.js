const { merge } = require('webpack-merge');
const WebpackConfig = require('./webpack.config.base');
const { DefinePlugin } = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(WebpackConfig, {
    mode: 'production',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    minSize: 0,
                    minChunks: 1,
                    chunks: 'initial',
                    priority: 2
                }
            }
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,

                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log']
                    }
                }
            })
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano')(),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }]
            },
            canPrint: true
        })
    ]
});
