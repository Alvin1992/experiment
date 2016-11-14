/**
 * Created by alvin on 11/11/16.
 */

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if (req.url !== "/favicon.ico") {  // remove the second visit
        console.log('visit');
        res.write('Hello World');
        res.end();  // end this visit otherwise the browser will stay loading
    }
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080');
