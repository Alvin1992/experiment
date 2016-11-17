/**
 * Created by Alvin on 2016/11/17.
 */

var fs = require('fs');

var readStream = fs.createReadStream('./carrot.avi');
var writeStream = fs.createWriteStream('./carrot_copy.avi');

readStream.on('data', function (chunk) {
    if (writeStream.write(chunk) == false) {
        console.log('stream paused');
        readStream.pause();
    }
});

readStream.on('end', function () {
    writeStream.end();
});

writeStream.on('drain', function () {
    console.log('data drain');
    readStream.resume();
});
