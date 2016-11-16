/**
 * Created by Alvin on 2016/11/14.
 */

var fileRouter = require('./file_for_router');
var url = require('url');
var querystring = require('querystring');
var OpPool = require('./opPool');


var opPool = new OpPool();
var pool = opPool.getPool();


function getCallback(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    function callback(data) {
        res.write(data);
        res.end();
    }
    return callback;
}

module.exports = {
    login: function (req, res) {
        // GET提交方式
        /*var rdata = url.parse(req.url, true).query;
        console.log(rdata);
        if (rdata['email'] != undefined) {
            console.log(rdata['email']);
            console.log(rdata['pwd']);
        }*/

        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });
        req.on('end', function () {
            post = querystring.parse(post);
            if (post['email']) {
                console.log('收到参数' + post['email'] + '\n');
                console.log('收到参数' + post['pwd'] + '\n');
            }
        });
        var callback = getCallback(req, res);
        fileRouter.asyncRead('./views/login.html', callback);
    },
    register: function (req, res) {
        var callback = getCallback(req, res);
        fileRouter.asyncRead('./views/register.html', callback);
    },
    completeHtml: function (req, res) {
        var callback = getCallback(req, res);
        fileRouter.asyncRead('./views/completeHtml.html', callback);
    },
    showImg: function (req, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        fileRouter.readImg('./images/4.png', res);
    },
    submitForm: function (req, res) {
        var callback = getCallback(req, res);
        fileRouter.asyncRead('./views/submitForm.html', callback);
    },
    dynamicHtml: function (req, res) {
        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });
        req.on('end', function () {
            post = querystring.parse(post);
            var arr = ['email', 'pwd'];
            function callback(data) {
                var dataStr = data.toString();
                for (var i = 0; i < arr.length; i++) {
                    var re = new RegExp('{' + arr[i] + '}', 'g');
                    dataStr = dataStr.replace(re, post[arr[i]]);
                }
                res.write(dataStr);
                res.end();
            }
            fileRouter.asyncRead('./views/dynamicHtml.html', callback);
        });
    },
    test_register: function (req, res) {
        res.writeHead(200, {"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });
        req.on('end', function () {
            post = querystring.parse(post);
            var param = [post['name'], post['pwd']];
            console.log(param);

            pool.getConnection(function (err, conn) {
                if (err) {
                    console.log(err);
                    return;
                }
                var userAddSql = 'insert into user (uname,pwd) values(?,?)';
                conn.query(userAddSql, param, function (err, rs) {
                    if (err) {
                        res.write('0');
                        res.end();
                        console.log('insert error: ', err.message);
                        return;
                    }
                    console.log('insert success');
                    res.write('1');
                    res.end();
                    conn.release(); // 放回连接池
                });
            });

        });
    },
    test_search: function (req, res) {
        res.writeHead(200, {"Content-Type":'text/json','charset':'utf-8','Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
        pool.getConnection(function (err, conn) {
            if (err) {
                console.log(err);
                return;
            }
            var arr = [];
            conn.query('SELECT * from user', function (err, rs) {
                if (err) {
                    console.log('[query] - : ' + err);
                    return;
                }
                for (var i = 0; i < rs.length; i++) {
                    arr.push(rs[i]);
                }
                res.write(JSON.stringify(arr));
                res.end();
                conn.release(); // 放回连接池
            });
        });
    },
    link_mysql: function (req, res) {
        var callback = getCallback(req, res);
        fileRouter.asyncRead('./views/link_mysql.html', callback);
    }
};
