const readlineSync = require("readline-sync");

// random 
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// copier / coller
const tvSerie = {};

function askTvSerie() {
    tvSerie.name = readlineSync.question("tell me what is your favorite TV series please ");
    tvSerie.class = readlineSync.question("oh cool! what kind of series would you say ? ");
    tvSerie.date = readlineSync.question("and yes ? and what is his year of prodiction?");
    tvSerie.cast = [];
    let askCast = true;
    while (askCast = true) {
        let castTemp = readlineSync.question("Very interesting! can you tell me who's playing in it?.("empty to finish")");

        if (castTemp === 'exit') {
            break;
        }

        tvSerie.cast.push(castTemp);
    }

    return tvSerie;
}

askTvSerie();
// random function
function randomizeCast(serie) {
    shuffle(serie.cast);
}

randomizeCast(tvSerie);
console.log(tvSerie);