const readlineSync = require("readline-sync");

let age = readlineSync.question("how old are you ? ");
if ((age >= 18)(age <= 17)) {
    console.log("You probably are an adult");
} else {
    console.log("You probably are a child");
}
