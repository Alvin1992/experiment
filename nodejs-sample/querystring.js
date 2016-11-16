/**
 * Created by Alvin on 2016/11/16.
 */

var querystring = require('querystring');

// name=Alvin&course=node&course=express&from=
console.log(querystring.stringify({name: 'Alvin', course: ['node', 'express'], from: ''}));

// name=Alvin,course=node,course=express,from=
console.log(querystring.stringify({name: 'Alvin', course: ['node', 'express'], from: ''}, ','));

// name:Alvin,course:node,course:express,from:
console.log(querystring.stringify({name: 'Alvin', course: ['node', 'express'], from: ''}, ',', ':'));

console.log(querystring.parse('name=Alvin&course=node&course=express&from='));

console.log(querystring.parse('name=Alvin,course=node,course=express,from=', ','));

console.log(querystring.escape('哈哈哈>'));
console.log(querystring.unescape('%E5%93%88%E5%93%88%E5%93%88%3E'));
