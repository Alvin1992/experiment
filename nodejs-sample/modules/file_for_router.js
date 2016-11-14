/**
 * Created by Alvin on 2016/11/14.
 */

var fs = require('fs');

module.exports = {
    async: function (path, callback, res) {
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
                return
            }
            callback(data, res);
        })
    }
};
