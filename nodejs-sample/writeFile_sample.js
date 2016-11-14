/**
 * Created by Alvin on 2016/11/14.
 */

var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url === '/') {
        fs.writeFile('foobar.txt', 'Hello World', function (err) {
            if (err) {
                console.log(err);
                return
            }
            res.write('It\'s saved');
            res.end();
        });
    } else {
        res.write('404');
        res.end();
    }
}).listen(8080);
