/**
 * Created by alvin on 11/13/16.
 */

var Stuff = require('./stuff');

function Teacher(id, name, age) {
    Stuff.apply(this, [id,name, age]);
    this.teach = function (res) {
        res.write('Teacher ' + this.name + ' is teaching.<br>');
    }
}

module.exports = Teacher;
