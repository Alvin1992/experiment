/**
 * Created by alvin on 11/11/16.
 */

var http = require('http');
var func = require('./modules/module_func');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if (req.url !== "favicon.ico") {
        foo(res);
        func.bar(res);
        func.foobar(res);
        res.end();
    }
}).listen(8080);

function foo(res) {
    console.log('foo');
    res.write('Hello I\'m foo');
}
