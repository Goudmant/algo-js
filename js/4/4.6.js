const readlineSync = require("readline-sync");

function factorial(a) {
    $resultat = 1;
    for ($i = 1; $i <= a; $i++)
        $resultat *= $i;
    return $resultat;
}
console.log();