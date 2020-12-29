const isDev = process.env.NODE_ENV === 'development'

const path = require("path");
const glob = require('glob-all');
const AssetsPlugin = require("assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const PurgeCSSPlugin = require('purgecss-webpack-plugin')

const purgeCSSPaths = glob.sync([
    `${path.join(__dirname, 'layouts')}/**/*`,
    `${path.join(__dirname, 'public')}/**/*.html`
], { mark: true }).filter(function(f) { return !/\/$/.test(f); });

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: {
        main: path.join(__dirname, "assets", "js", "main.js"),
        test: path.join(__dirname, "assets", "sass", "test.scss"),
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/,
                options: {cacheDirectory: true}
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader", 
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev,
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
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join(__dirname, 'dist'), 
                path.join(__dirname, 'public')
            ]
        }),
        new AssetsPlugin({
            filename: "manifest.json",
            path: path.join(process.cwd(), "data"),
            prettyPrint: true,
            removeFullPathAutoPrefix: true
        }),
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        }),
        new PurgeCSSPlugin({
            paths: purgeCSSPaths
        }),
    ]
}