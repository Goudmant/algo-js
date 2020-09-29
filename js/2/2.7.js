const readlineSync = require("readline-sync");

let total = 0;
let n = new Number(readlineSync.question("give me a number.  "));

for (i = 0; i < n; i++) {
    total += new Number(readlineSync.question("[" + (i + 1) + "/" + n + "]" + " " + "Enter a number:"));
}
console.log("Total:" + total);