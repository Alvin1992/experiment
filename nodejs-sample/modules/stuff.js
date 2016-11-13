/**
 * Created by alvin on 11/13/16.
 */

function Stuff(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.university = 'HN';
    this.showSelf = function (res) {
        res.write(this.university + "'" + this.name + ", id " + this.id + ", age " + this.age + '<br>');
    }
}

module.exports = Stuff;
