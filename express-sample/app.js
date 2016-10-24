/**
 * Created by alvin on 10/24/16.
 */

/*
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/about', function (req, res) {
    res.send('This is a page about Alvin');
});

app.get('*', function (req, res) {
    res.send('404 Error!');
});

app.listen(8080);*/

/*var express = require('express');
var app = express();

// all过滤所有路径的请求， 所有请求都必须先通过此该中间件
app.all('*', function (req, res, next) {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    next();  // 执行下一个中间件
});

app.get('/', function (req, res) {
    res.end('Hello World!');
});

app.get('/about', function (req, res) {
    res.end('This is a page of Alvin');
});

app.get('*', function (req, res) {
    res.end('404 Error!');
});

app.listen(8080);*/

var express = require('express');
var app = express();

/*// use是express调用中间件的方法，它返回一个函数
// 可选参数path默认为"/"
// 所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中
// 将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了
// http://localhost:8080/test.txt
// app.use(express.static('public'));

// 如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，
// 可以通过为静态资源目录指定一个挂载路径的方式来实现
// http://localhost:8080/static/test.txt
// app.use('/static', express.static('public'));

// 连续调用两个中间件
// 回调函数的next参数，表示接受其他中间件的调用，函数体中的next()，表示将请求数据传递给下一个中间件
app.use(function (req, res, next) {
    console.log("method: " + req.method + " ==== " + "url: " + req.url);
    next();
});

app.use(function (req, res, next) {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    res.end("连续调用两个中间件");
});

// use方法不仅可以调用中间件，还可以根据请求的网址，返回不同的网页内容
app.use(function (req, res, next) {
    if (req.url == '/') {
        res.send('Hello World!');
    } else {
        next()
    }
});

app.use(function (req, res, next) {
    if (req.url == '/about') {
        res.send('This is the page of About');
    } else {
        next();
    }
});

app.use(function (req, res, next) {
    res.send('404 Error!');
});*/

/*// req.hostname返回请求头里取的主机名(不包含端口号)
// req.path返回请求的URL的路径名

app.get('*', function (req, res) {
    res.send('主机名：'+ req.hostname + '请求路径：' + req.path);
});*/

/*// query是一个可获取客户端get请求路径参数的对象属性
// 包含着被解析过的请求参数对象，默认为{}
app.get('*', function (req, res) {
    console.log(req.query);
    res.send(req.query.test);
});*/

/*// req.param可以获取被解析过的请求参数对象的值
app.get('/about', function (req, res) {
    res.send(req.param('test'));
});*/

// send用法
// send()方法向浏览器发送一个响应信息，并可以智能处理不同类型的数据
// 当参数为一个String时，Content-Type默认设置为"text/html"
app.get('/', function (req, res) {
    res.send('Hello');
});
// 当参数为Array或Object时，Express会返回一个JSON
app.get('/arr', function (req, res) {
    res.send([1,2,3]);
});

// 当参数为一个Number时，并且没有上面提到的任何一条在响应体里，Express会帮你设置一个响应体
app.get('/succ', function (req, res) {
    res.send(200);  // OK
});
app.get('/server', function (req, res) {
    res.send(500);  //Internal Server Error
});
app.get('*', function (req, res) {
    res.send(404); // Not Found
});

app.listen(8080);

