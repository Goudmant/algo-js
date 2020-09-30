const readlineSync = require("readline-sync");

let rand10 = () => { return Math.trunc((Math.random() * 10) + 1); }

console.log(rand10());