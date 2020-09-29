const readlineSync = require("readline-sync");

let i = 1;
while (i <= 100) {
    console.log(i);
    i += 1;
}
for (i = 1; i <= 100; i += 2) {
    console.log(i / 2);
}
for (i = 1; i <= 100; i += 3) {
    console.log(i / 3);
}