/**
 * Created by Alvin on 2016/11/17.
 */

var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    content: 'zuihouyici',
    mid: 8837
});

var header = {
 "Accept":'application/json, text/javascript, */*; q=0.01',
 "Accept-Encoding":'gzip, deflate',
 "Accept-Language":'en-US,en;q=0.8,zh-TW;q=0.6,zh;q=0.4',
 "Connection":'keep-alive',
 "Content-Length": postData.length,
 "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8',
 "Cookie": 'imooc_uuid=7193c43b-e617-4657-a783-21f21b7253f0; imooc_isnew_ct=1478861340; loginstate=1; apsid=Y1YmI5NTBiYjkwZjEyZmRkOGQ3MTc1MGVlNzJkYjkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTA2MDk0MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmYW5yeF8xOTkyQDE2My5jb20AAAAAAAAAAAAAAAAAADVkMjk5YmRkZjMyNzYxZGE5Y2YxYmY1ZDJhODA5MmVlXhksWF4ZLFg%3DZG; last_login_username=fanrx_1992%40163.com; IMCDNS=0; PHPSESSID=74je6ae4gdd2lp1li9jusp3jp5; jwplayer.qualityLabel=é«æ¸; jwplayer.volume=70; imooc_isnew=2; cvde=582d1ae0235ca-31',
 "Host":'www.imooc.com',
 "Origin":'"http"://www.imooc.com',
 "Referer":'"http"://www.imooc.com/video/8837',
 "User-Agent":'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
 "X-Requested-With":'XMLHttpRequest'
};

var req = http.request({
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: header
}, function (res) {
    console.log(res.statusCode);
    var result = '';
    res.on('data', function (chunk) {
        console.log(typeof chunk);
    });
    res.on('end', function () {
        console.log('评论完毕');
    });
});

req.on('error', function (err) {
    console.log(err.message);
});

req.write(postData);
req.end();
