/**
 * Created by Alvin on 2016/11/14.
 */

var http =require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    if (req.url !== '/favicon.ico') {
        fs.readFile('./images/4.png', 'binary', function (err, filedata) {
            if (err) {
                console.log(err);
                return
            }
            res.write(filedata, 'binary');
            res.end();
        })
    }
}).listen(8080);
