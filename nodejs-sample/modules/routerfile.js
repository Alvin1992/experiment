/**
 * Created by Alvin on 2016/11/14.
 */

var fileRouter = require('./file_for_router');

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
    }
};
