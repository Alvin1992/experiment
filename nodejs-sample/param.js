/**
 * Created by Alvin on 2016/11/15.
 */

var http = require('http');
var router = require('./modules/routerfile');
var url = require('url');

http.createServer(function (req, res) {
    if (req.url !== '/favicon.ico') {
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');
        try {
            router[pathname](req, res);
        } catch (e) {
            console.log('TTT ' + e);
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(e.toString());
            res.end();
        }
    }
}).listen(8080);

console.log('Server is running at port 8080');
