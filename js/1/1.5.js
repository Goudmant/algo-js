const readlineSync = require("readline-sync");

let firstnum = readlineSync.question("Can you give me a number decimal?");
let secondnum = readlineSync.question("Can you give me a other number decimal?");
console.log(Math.trunc(firstnum) * secondnum)