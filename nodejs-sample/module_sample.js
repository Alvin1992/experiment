/**
 * Created by alvin on 11/13/16.
 */

var Stuff = require('./modules/stuff');
var Teacher = require('./modules/teacher');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== 'favicon.ico') {
        var aStuff = new Stuff(0, 'Alvin', 24);
        aStuff.showSelf(res);
        var aTeacher = new Teacher(1, 'Kathy', 23);
        aTeacher.teach(res);
        res.end();
    }
}).listen(8080);

console.log('Server is running at port 8080');
