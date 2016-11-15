/**
 * Created by Alvin on 2016/11/14.
 */

var fileRouter = require('./file_for_router');
var url = require('url');
var querystring = require('querystring');

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
    }
};
