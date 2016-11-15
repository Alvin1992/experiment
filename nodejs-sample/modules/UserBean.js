/**
 * Created by Alvin on 2016/11/15.
 */

var events = require('events');

function UserBean() {
    this.eventEmit = new events.EventEmitter();
    this.register = function (req, res) {
        console.log('register');
        req['uname'] = 'aa';
        req['pwd'] = 'bb';
        this.eventEmit.emit('register', 'aa', 'bb');
    };
    this.login = function (req, res) {
        console.log('login');
        res.write('用户名：' + req['uname']);
        res.write('密码：' + req['pwd']);
        res.write('登录');
    }
}

module.exports = UserBean;
