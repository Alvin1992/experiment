/**
 * Created by alvin on 10/19/16.
 */
var config = require('./config.json');
module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = 'Hi, my name is Alvin';
    return greet;
};