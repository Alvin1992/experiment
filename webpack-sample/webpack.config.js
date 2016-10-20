/**
 * Created by alvin on 10/19/16.
 */
module.exports = {
    devtool: 'cheap-source-map', // 生成sourcemap
    entry: __dirname + '/app/main.js', // 唯一入口
    output: {
        path: __dirname + '/public', // 打包后文件存放的地方
        filename: 'bundle.js' // 打包后输出文件的文件名
    }
};