
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    //(function () {

    //var month = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");
    //var number = new Array("un", "deux", "trois")

    //document.getElementById("run").addEventListener("click", function () {


    //    thisyear = document.getElementById("year").value;
    //    year = new Date(+document.getElementById("year").value, 0);
    //    today = new Date();

    //    for (i = 0; i < 12; i++) {

    //        year.setMonth(i, 13);

    //        if (year.getDay() == 5) {
    //            rep = rep + "<br/>" + month[i];
    //            vdd = vdd + 1;
    //        }
    //    }

    //    if (year.getFullYear() < today.getFullYear()) {
    //        times = "a eu";
    //    }
    //    if (year.getFullYear() > today.getFullYear()) {
    //        times = "aura";
    //    }
    //    if (year.getFullYear() == today.getFullYear()) {
    //        times = "a";
    //    }

    //    vdd = year[vdd - 1];

    //    rep = "En " + thisyear + ", il y " + times + " " + vdd + " vendredi" + s + " 13 au" + x + " mois suivant" + s + ":<br/>" + rep;
    //    document.getElementById("target").innerHTML = rep;

    //})
    ///Pourquoi ca ne marque pas

    const run = document.getElementById('run');
    const year = document.getElementById('year');


    function getSpookyFridaysIn(yr) {
        let spookyMonths = []
        let monthName = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
        for (let month = 0; month < 12; month++) {
            let d = new Date(yr, month, 13);
            if (d.getDay() == 5) {
                spookyMonths.push(monthName[d.getMonth()])
            }
        }
        return spookyMonths;
    }

    run.addEventListener('click', function () {
        let yearInt = parseInt(year.value);
        alert(`In ${yearInt}, Friday 13th happens in : ${getSpookyFridaysIn(yearInt)}`)
    })




})();
