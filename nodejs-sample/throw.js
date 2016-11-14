/**
 * Created by Alvin on 2016/11/14.
 */

var http = require('http');
var exception = require('./modules/exception');

http.createServer(function (req, res) {
    if (req.url !== '/favicon.ico') {
        try {
            var data = exception.expfun(0);
            res.write(data);
            res.end();
        } catch (e) {
            console.log('TTT ' + e);
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(e.toString());
            res.end();
        }
    }
}).listen(8080);

console.log('Server is running at port 8080');
