const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OS = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: OS.cpus().length });

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: ['@babel/polyfill', resolve(__dirname, '../src/index.js')],
    output: {
        publicPath: './',
        filename: '[name].[contenthash:8].js',
        path: resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, '../src'),
            '@views': resolve(__dirname, '../src/views')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/public/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name]_[contenthash:8].css'
        }),
        new HappyPack({
            id: 'happyBabel',
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-async-to-generator', '@babel/plugin-syntax-top-level-await'],
                        cacheDirectory: true
                    }
                }
            ],
            threadPool: happyThreadPool
        })
    ],
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            esModule: false,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'imgs/[name].[contenthash:8].[ext]'
                                }
                            }
                        }
                    }
                ],
                type: 'javascript/auto'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
                type: 'asset/inline'
            },
            {
                test: /\.(html)$/i,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'happypack/loader?id=happyBabel'
            },
            {
                test: /\.(css|less)$/i,
                exclude: /node_modules/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: !isProd, importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: !isProd,
                            postcssOptions: {
                                plugins: [
                                    require('postcss-pxtorem')({
                                        rootValue: 100,
                                        selectorBlackList: [], //过滤
                                        propList: ['*']
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: !isProd }
                    }
                ]
            }
        ]
    }
};
