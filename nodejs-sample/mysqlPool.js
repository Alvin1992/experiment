/**
 * Created by Alvin on 2016/11/15.
 */

var OpPool = require('./modules/opPool');

var opPool = new OpPool();
var pool = opPool.getPool();

// 从连接池获取一个连接
pool.getConnection(function (err, conn) {
    var userAddSql = 'insert into user (uname,pwd) values(?,?)';
    var param = ['eee', 'eee'];
    conn.query(userAddSql, param,function (err, rs) {
        if (err) {
            console.log('insert error: ', err.message);
            return;
        }
        console.log('insert success');
    });

    // 查询
    conn.query('SELECT * from user', function (err, rs) {
        if (err) {
            console.log('[query] - : ' + err);
            return;
        }
        for (var i = 0; i < rs.length; i++) {
            console.log('The '+ i +' username is: ', rs[i].uname);
        }
        conn.release(); // 放回连接池
    });

});

