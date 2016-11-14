/**
 * Created by Alvin on 2016/11/14.
 */

var http = require('http');
var router = require('./modules/routerfile');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== '/favicon.ico') {
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');
        if (pathname === 'login' || pathname === 'register') {
            router[pathname](req, res);
        } else {
            res.write('404');
            res.end();
        }
    }
}).listen(8080);
