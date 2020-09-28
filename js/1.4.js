const readlineSync = require("readline-sync");

let Name = readlineSync.question("What's your name?");
let firstName = readlineSync.question("what's your firstName?")
let City = readlineSync.question("Which city are you from?")
console.log(Name + " " + firstName + " " + City)