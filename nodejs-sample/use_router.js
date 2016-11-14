/**
 * Created by alvin on 11/13/16.
 */

var http = require('http');
var router = require('./router');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset-utf-8'});
    if (req.url !== '/favicon.ico') {
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');
        if (pathname === 'login' || pathname === 'register') {
            router[pathname](res);
        } else {
            res.write('404');
        }
        res.end();
    }
}).listen(8080);

console.log('Server is running at port 8080');
