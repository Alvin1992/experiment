/**
 * Created by Alvin on 2016/11/15.
 */

var async = require('async');

/*function foo() {
    var i = 0;
    setInterval(function () {
        console.log('aaa ' + new Date());
        i++;
        if ( i >= 3 ) {
            clearInterval(this);
        }
    }, 1000);
    console.log('foo');
}

function bar() {
    var i = 0;
    setInterval(function () {
        console.log(this);  // node下setInterval的返回值是一个Timeout对象，内部的this也是这个对象
        console.log('bbb ' + new Date());
        i++;
        if ( i >= 3 ) {
            clearInterval(this);  // 所以node清除定时器可以用setInterval的返回值也可以用this
        }
    }, 1000);
    console.log('bar');
}

foo();
bar();*/

/*function exec() {
    async.series(
        {
            foo: function (done) {
                var i = 0;
                setInterval(function () {
                    console.log('aaa ' + new Date());
                    i++;
                    if ( i >= 3 ) {
                        clearInterval(this);
                        done('error', 'foo done');
                    }
                }, 1000);
            },
            bar: function (done) {
                var i = 0;
                setInterval(function () {
                    console.log(this);
                    console.log('bbb ' + new Date());
                    i++;
                    if ( i >= 3 ) {
                        clearInterval(this);
                        done(null, 'bar done');
                    }
                }, 1000);
            }
        },
        function (err, rs) {
            console.log(err);
            console.log(rs);
        }
    );
}*/

/*function exec() {
    async.parallel(
        {
            foo: function (done) {
                var i = 0;
                setInterval(function () {
                    console.log('aaa ' + new Date());
                    i++;
                    if ( i >= 3 ) {
                        clearInterval(this);
                        done('errrr', 'foo done');  // 不会执行bar的回调，但是会执行完bar
                    }
                }, 1000);
            },
            bar: function (done) {
                var i = 0;
                setInterval(function () {
                    console.log('bbb ' + new Date());
                    i++;
                    if ( i >= 3 ) {
                        clearInterval(this);
                        done(null, 'bar done');
                    }
                }, 1000);
            }
        },
        function (err, rs) {
            console.log(err);
            console.log(rs);
        }
    );
}*/

function exec() {
    async.waterfall(
        [
            function (done) {
                var i = 0;
                setInterval(function () {
                    console.log('aaa ' + new Date());
                    i++;
                    if ( i >= 3 ) {
                        clearInterval(this);
                        done(null, 'foo done');
                    }
                }, 1000);
            },
            function (preValue, done) {
                var i = 0;
                setInterval(function () {
                    console.log( preValue + new Date());
                    i++;
                    if ( i >= 3 ) {
                        clearInterval(this);
                        done(null, preValue + ' bar done');
                    }
                }, 1000);
            }
        ],
        function (err, rs) {
            console.log(err);
            console.log(rs);
        }
    );
}
exec();
console.log('主进程执行完毕');
