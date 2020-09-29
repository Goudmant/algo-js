const readlineSync = require("readline-sync");

let shoesize = readlineSync.question("what's size are your shoes?");
let birthyear = readlineSync.question("what is your year of birth?");

console.log(((((shoesize * 2) + 5) * 50) - birthyear) + 1766)