/**
 * Created by alvin on 11/14/16.
 */

var http = require('http');
var opFile = require('./modules/opFile');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== '/favicon.ico') {
        // opFile.sync('./views/login.html');   // 同步读取
        function callback(data) {
            res.write(data);
            res.end();
        }
        opFile.async('./views/login.html', callback);
        console.log('main complete');
    }
}).listen(8080);
