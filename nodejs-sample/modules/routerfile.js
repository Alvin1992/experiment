/**
 * Created by Alvin on 2016/11/14.
 */

var fileRouter = require('./file_for_router');

function callback(data, res) {
    res.write(data);
    res.end();
}

module.exports = {
    login: function (req, res) {
        fileRouter.async('./views/login.html', callback, res);
    },
    register: function (req, res) {
        fileRouter.async('./views/register.html', callback, res);
    }
};
