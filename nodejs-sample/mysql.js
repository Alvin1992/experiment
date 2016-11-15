/**
 * Created by Alvin on 2016/11/15.
 */

var mysql = require('mysql');

// 创建一个connection对象
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: '3306'
});

// 创建一个连接
connection.connect(function (err) {
    if (err) {
        console.log('[query] - : ' + err);
        return;
    }
    console.log('[connection connect] succeed');
});

// 执行插入
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var param = ['ccc', 'ccc'];
connection.query(userAddSql, param,function (err, rs) {
    if (err) {
        console.log('insert error: ', err.message);
        return;
    }
    console.log('insert success');
});

// 执行查询
connection.query('SELECT * from user', function (err, rs) {
    if (err) {
        console.log('[query] - : ' + err);
        return;
    }
    for (var i = 0; i < rs.length; i++) {
        console.log('The '+ i +' username is: ', rs[i].uname);
    }
});

// 关闭连接
connection.end(function (err) {
    if (err) {
        console.log(err.toString());
        return;
    }
    console.log('[connection end] succeed');
});
