const readlineSync = require("readline-sync");

for (favnbr != 42) {
    let favnbr = new Number(readlineSync.question("give me your favorite number please galactic traveler ! "));
    if (favnbr == 42) {
        console.log("good choice galactic traveler ! ");
    } else {
        console.log("Are you sure...? Douglas Adams is not satisfied....")
    }
}
