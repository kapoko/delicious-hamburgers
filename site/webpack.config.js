const isDev = process.env.NODE_ENV === 'development'

const webpack = require('webpack');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: {
        main: path.join(__dirname, "assets", "js", "main.js")
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/,
                query: {cacheDirectory: true}
            },
        ]
    },
    plugins: [
        new AssetsPlugin({
            filename: "manifest.json",
            path: path.join(process.cwd(), "data"),
            prettyPrint: true
        }),
    ]
}
  