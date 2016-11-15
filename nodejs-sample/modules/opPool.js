/**
 * Created by Alvin on 2016/11/15.
 */

var mysql = require('mysql');

function OpPool() {
    this.flag = true; // 是否连接过
    this.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test',
        port: '3306'
    });

    this.getPool = function () {
        if (this.flag) {
            // 监听connect
            this.pool.on('connection', function (connection) {
                connection.query('SET SESSION auto_increment_increment');
                this.flag = false;
            });
        }
        return this.pool;
    }
}

module.exports = OpPool;
