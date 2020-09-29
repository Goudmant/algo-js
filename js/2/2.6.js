const readlineSync = require("readline-sync");

let days = ["monday", "thuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let nbr;

do {
    nbr = new Number(readlineSync.question("Enter a number between 1 and 7: "));
} while ((nbr <= 0 || nbr > 7))

console.log(days[nbr - 1]);
