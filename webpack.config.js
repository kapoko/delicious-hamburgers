const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const StylelintPlugin = require('stylelint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
module.exports = [
    // Minified css
    {
        entry: './scss/hamburgers.scss',
        mode: isDev ? 'development' : 'production',
        output: {
            path: path.resolve(process.cwd(), 'dist'),
        },
        optimization: {
            minimize: true,
            minimizer: [
              `...`,
              new CssMinimizerPlugin(),
            ],
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                  [
                                    'postcss-preset-env',
                                    {
                                      // Options
                                    },
                                  ],
                                ],
                              },
                        },
                    },
                    "sass-loader"
                ]
            }]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new RemoveEmptyScriptsPlugin(),
            new MiniCssExtractPlugin({
                filename: "hamburgers.min.css",
            }),
            new StylelintPlugin({
                fix: true,
                files: 'scss/**/*.scss'
            }),
        ]
    },
    // Normal css
    {
        entry: './scss/hamburgers.scss',
        mode: 'none',
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                  [
                                    'postcss-preset-env',
                                    {
                                      // Options
                                    },
                                  ],
                                ],
                              },
                        },
                    },
                    "sass-loader"
                ]
            }]
        },
        optimization: {
            minimize: false
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new RemoveEmptyScriptsPlugin(),
            new MiniCssExtractPlugin({
                filename: "hamburgers.css",
            }),
        ]
    }
];
