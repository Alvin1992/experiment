/**
 * Created by Alvin on 2016/11/14.
 */

var http = require('http');
var router = require('./modules/routerfile');
var url = require('url');

http.createServer(function (req, res) {
    if (req.url !== '/favicon.ico') {
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');
        router[pathname](req, res);
    }
}).listen(8080);

console.log('Server is running at port 8080');
