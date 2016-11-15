/**
 * Created by Alvin on 2016/11/15.
 */

var UserBean = require('./modules/UserBean');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== '/favicon.ico') {
        var user = new UserBean();
        user.eventEmit.once('register', function (uname, pwd) {
            res.write('注册成功');
            console.log('传来uname：' + uname);
            console.log('传来pwd：' + pwd);
            user.login(req, res);
            res.end();
        });
        user.register(req, res);
    }
}).listen(8080);

console.log('main process is running');
