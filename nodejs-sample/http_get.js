/**
 * Created by Alvin on 2016/11/17.
 */

var http = require('http');

var url = 'http://www.imooc.com/video/8837';

http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function () {
        console.log(html);
    })
}).on('error', (e) => {
    console.log('出错了');
});
