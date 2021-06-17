const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OS = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: OS.cpus().length });
const PostcssNormalize = require('postcss-normalize');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: resolve(__dirname, '../src/index.tsx'),
    output: {
        publicPath: isProd ? './' : '/',
        filename: 'js/[name].[contenthash:8].js',
        path: resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': resolve(__dirname, '../src'),
            '@pages': resolve(__dirname, '../src/pages'),
            '@assets': resolve(__dirname, '../src/assets')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../public/index.html'),
            title: 'jwyblogs',
            filename: 'index.html',
            cache: true,
            minify: isProd,
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name]_[contenthash:8].css'
        }),
        new ForkTsCheckerWebpackPlugin({
            async: !isProd,
            checkSyntacticErrors: true,
            tsconfig: resolve(__dirname, '../tsconfig.json'),
            reportFiles: ['../**/src/**/*.{ts,tsx}', '**/src/**/*.{ts,tsx}', '!**/src/**/__tests__/**', '!**/src/**/?(*.)(spec|test).*', '!**/src/setupProxy.*', '!**/src/setupTests.*'],
            silent: true,
            formatter: isProd ? typescriptFormatter : undefined
        }),
        new HappyPack({
            id: 'happyBabel',
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic'
                                }
                            ],
                            '@babel/preset-typescript'
                        ],
                        plugins: [
                            ...['@babel/plugin-transform-async-to-generator', '@babel/plugin-syntax-top-level-await', '@babel/plugin-transform-typescript', '@babel/plugin-transform-runtime'],
                            !isProd ? require.resolve('react-refresh/babel') : {}
                        ],
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
                test: /\.(jsx?|tsx?)$/i,
                exclude: /node_modules/,
                use: 'happypack/loader?id=happyBabel'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
                type: 'asset/inline'
            },
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
                test: /\.(css|scss)$/i,
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
                                    // require('postcss-pxtorem')({
                                    //     rootValue: 100,
                                    //     selectorBlackList: [], //过滤
                                    //     propList: ['*']
                                    // })
                                ]
                            }
                        }
                    },

                    {
                        loader: 'sass-loader',
                        options: { sourceMap: !isProd }
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: resolve(__dirname, '../src/common/scss/variable.scss')
                        }
                    }
                ]
            }
        ]
    }
};
