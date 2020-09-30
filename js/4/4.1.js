const readlineSync = require("readline-sync");

let width = readlineSync.question("give me one width  ");
let height = readlineSync.question("give me one height  ");

function calcSurface(width, height) {
    return width * height;
}

console.log(Math.trunc(width) * (height)); 
