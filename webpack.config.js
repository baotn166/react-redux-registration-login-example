var HtmlWebpackPlugin = require('html-webpack-plugin');
const API_URL = process.env.API_URL

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: API_URL
        })
    }
}