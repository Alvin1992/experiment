/**
 * Created by alvin on 11/14/16.
 */

var http = require('http');
var opFile = require('./modules/opFile');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== 'favicon.ico') {
        opFile.sync('./views/login.html');
        console.log('main complete');
        res.end();
    }
}).listen(8080);
