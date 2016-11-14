/**
 * Created by alvin on 11/14/16.
 */

var fs = require('fs');

module.exports = {
    sync: function (path) {
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log('read file sync');
    },
    async: function (path) {
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log(data);
            console.log('read file async');
        })
    }
};
