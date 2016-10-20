/**
 * Created by alvin on 10/19/16.
 */
module.exports = {
    devtool: 'cheap-source-map', // 生成sourcemap
    entry: __dirname + '/app/main.js', // 唯一入口
    output: {
        path: __dirname + '/public', // 打包后文件存放的地方
        filename: 'bundle.js' // 打包后输出文件的文件名
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: 'style!css' //感叹号的作用在于使同一文件能够使用不同类型的loader
            }
        ]
    },
    devServer: {
        contentBase: "./public", // 本地服务器加载页面所在的目录
        colors: true, // 终端输出为彩色
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    }
};