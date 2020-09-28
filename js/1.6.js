const readlineSync = require("readline-sync");

let firstnum = readlineSync.question('Can you give me a number ?');
let secondnum = readlineSync.question('Can you give me a other number?');
console.log(Math.trunc(firstnum) * secondnum)