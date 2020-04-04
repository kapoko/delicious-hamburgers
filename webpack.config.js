const path = require('path');
const webpack = require('webpack');

const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const StylelintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require("autoprefixer");

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
            minimizer: [
                new TerserJSPlugin({}),
                new OptimizeCSSAssetsPlugin({})
            ]
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
                            plugins: () => [autoprefixer]
                        },
                    },
                    "sass-loader"
                ]
            }]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new FixStyleOnlyEntriesPlugin(),
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
                            plugins: () => [autoprefixer]
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
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: "hamburgers.css",
            }),
        ]
    }
];
