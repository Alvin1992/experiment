/**
 * Created by alvin on 11/11/16.
 */

/*function bar(res) {
    console.log('bar');
    res.write('Hi, I\'m bar');
}

module.exports = bar;  // only support export one function*/


// support more than one

function foobar(res) {
    console.log('foobar');
    res.write('Hi, I\'m foobar');
}


module.exports = {
    bar: function (res) {
        console.log('bar');
        res.write('Hi, I\'m bar');
    },
    foobar: foobar
};
