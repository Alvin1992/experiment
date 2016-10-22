/**
 * Created by alvin on 10/20/16.
 */
module.exports = {
    entry: {
        "main": './src/main.js',
        "css-mode": './src/css-mode.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(png)|(jpg)$/,
                loader: 'url?limit=50000'
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8081,
        colors: true,
        inline: true,
        historyApiFallback: true
    }
};