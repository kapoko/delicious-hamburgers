const path = require('path');
const webpack = require('webpack');

const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
    // Minified css
    {
        entry: './scss/hamburgers.scss',
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
            new CleanWebpackPlugin(),
        ]
    },
    // Normal css
    {
        entry: './scss/hamburgers.scss',
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: "hamburgers.css",
            }),
            new CleanWebpackPlugin(),
        ]
    }
];  