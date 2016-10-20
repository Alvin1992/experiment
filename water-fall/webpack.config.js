/**
 * Created by alvin on 10/20/16.
 */
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
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
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        colors: true,
        inline: true,
        historyApiFallback: true
    }
};