var doT = require('dot');

// 1. Compile template function
var tempFn = doT.template("<h1>Here is a sample template {{=it.foo}}</h1>");
// 2. Use template function as many times as you like
var resultText = tempFn({foo: 'with doT'});

console.log(resultText);
