//common js format
//import path from 'path'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const webpackConfigObject = {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/my-app')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'style-loader'
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        port: 4000,
        static: path.resolve(__dirname, 'dist'),
        compress: true
    }
}

module.exports = webpackConfigObject
//export default webpackConfigObject