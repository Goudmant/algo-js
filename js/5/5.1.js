const readlineSync = require("readline-sync");
let askCast = true;
const tvSerie = {}
//structure de la function et objet 0 soucis 
function askTvSerie() {
    tvSerie.name = readlineSync.question("tell me what is your favorite TV series please ");
    tvSerie.class = readlineSync.question("oh cool! what kind of series would you say ? ");
    tvSerie.date = readlineSync.question("and yes ? and what is his year of prodiction?");
    tvSerie.cast = [];
    //soucis structure 

    while (askCast = true) {
        let castTemps = readlineSync.question("Very interesting! can you tell me who's playing in it? ('empty to finish')");

        if (aSerie.actors[aSerie.actors.length - 1] == "") {
            tvSerie.cast.pop();
            contin = false;
        }
        tvSerie.cast.push(castTemps);
    }


}
askTvSerie();
console.log(tvSerie);



