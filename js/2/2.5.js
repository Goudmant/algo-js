const readlineSync = require("readline-sync");


let pick = new Number(readlineSync.question("give me your favorite number please galactic traveler ! "));

while (pick != 42) {
    pick = new Number(readlineSync.question("Are you sure...? Douglas Adams is not satisfied....start again !"));
}