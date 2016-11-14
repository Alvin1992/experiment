/**
 * Created by Alvin on 2016/11/14.
 */

var fs = require('fs');

module.exports = {
    asyncRead: function (path, callback) {
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
                callback('文件不存在');
                return
            }
            callback(data);
        })
    },
    readImg: function (path, res) {
        fs.readFile(path, 'binary', function (err, filedata) {
            if (err) {
                console.log(err);
                return
            }
            res.write(filedata, 'binary');
            res.end();
        })
    }
};
