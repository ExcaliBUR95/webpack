const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    mode: 'development',
    module: {
        rules:[
            {
            test: /\.css$/i, /\.js[x]?$/
            enforce: 'pre',
            use: ["style-loader", "css-loader", {
                loader: 'eslint-loader', 
            options: { fix: true }}],
            },
            include: path.resolve(__dirname, './src/**/*.js'),
            exclude: /node_modules/
        ],
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: './app.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            path: path.resolve(__dirname, 'src'),
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ]
}

