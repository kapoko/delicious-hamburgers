const isDev = process.env.NODE_ENV === 'development'

const path = require("path");
const autoprefixer = require("autoprefixer");
const AssetsPlugin = require("assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader", 
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    }, 
                    "sass-loader"
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new AssetsPlugin({
            filename: "manifest.json",
            path: path.join(process.cwd(), "data"),
            prettyPrint: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
    ]
}
  