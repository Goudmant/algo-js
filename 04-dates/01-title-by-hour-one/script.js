
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    let age = new Date();

    if ((age >= 18)(age <= 17)) {
        alert("Hello!");
    } else {
        alert("Aurevoir");
    }

    document.addEventListener("DOMContentLoaded", function () {
        let theDate = new Date();
        document.getElementById("target").innerHTML = (theDate.getHours() < 18) ? "hello" : "Good evening";
    });



})();
