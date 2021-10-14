const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const path = require('path')
const webpack = require('webpack')
const ESLintWebpackPlugin = require("eslint-webpack-plugin")

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    entry: './src/index.tsx', // our entry point, as mentioned earlier
    mode: isDevelopment ? "development" : "production",
    target: 'web',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, // matches .js, .ts, and .tsx files
                loader: 'babel-loader',
                options: {
                    plugins: [
                      isDevelopment && require.resolve("react-refresh/babel"),
                    ].filter(Boolean),
                },
                exclude: /node_modules/, 
            },
            {
                test: /\.css$/, // matches .css files only (i.e. not .scss, etc)
                use: ['style-loader', 'css-loader'], 
            },
            {
                test: /\.png|svg|jpg|gif$/,
                include: [
                    path.join(__dirname, 'static')
                ],
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    output: {
        filename: 'bundle.[hash].js', // our output bundle,
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new ESLintWebpackPlugin({
            extensions: ["js", "jsx", "ts", "tsx"]
        }),
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
        isDevelopment && new ForkTsCheckerWebpackPlugin({
            async: false
        })
    ], // used for hot reloading when developing
    devtool: 'eval-source-map', // builds high quality source maps
}