const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question("give me one number min ! "));
let max = new Number(readlineSync.question("one more a number max please ... "));
let current = new Number(readlineSync.question("one more number current tank you ! "));

if (current > min && current < max) {
    console.log("Yes ! yeees tank god, your number is between " + min + " and " + max + ".");
} else {
    console.log("No please no ! it's no betwen the max and the min pleeeeeease god...  " + min + " and " + max + ".");
}




