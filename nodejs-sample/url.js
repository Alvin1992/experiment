/**
 * Created by Alvin on 2016/11/16.
 */

var url = require('url');

// url.parse返回一个URL对象
/*
Url {
 protocol: 'http:',
 slashes: true,  // 是否有协议的双斜线
 auth: null,
 host: 'imooc.com:8080',
 port: '8080',
 hostname: 'imooc.com',
 hash: '#floor1',
 search: '?from=alvin&course=node',
 query: 'from=alvin&course=node',
 pathname: '/video/6710',
 path: '/video/6710?from=alvin&course=node',
 href: 'http://imooc.com:8080/video/6710?from=alvin&course=node#floor1' }*/
console.log(url.parse('http://imooc.com:8080/video/6710?from=alvin&course=node#floor1'));

// query: { from: 'alvin', course: 'node' }
console.log(url.parse('http://imooc.com:8080/video/6710?from=alvin&course=node#floor1', true));

console.log(url.parse('//imooc.com/video/6710', true, true));
