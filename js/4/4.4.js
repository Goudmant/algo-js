const readlineSync = require("readline-sync");

function average(arr) {
    let nums = [1, 2, 3, 4, 5];
    let total = 0;
    for (let elem of nums) {
        total += new Number(elem);
    }
}
console.log(total / nums.length);
