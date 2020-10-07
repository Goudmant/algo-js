
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

    function getFridays(month, year) {
        var ret = [];
        for (var i = 1; i <= 31; i++) {
            var date = new Date();
            date.setDate(i);
            date.setMonth(month - 1);
            date.setFullYear(year);
            if (date.getDay() === 5) {
                var today = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                ret.push(today);

            }
        }
        return ret;
    }



})();
