
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function () {
        alert(Number.parseInt(document.getElementById("op-one").value) + Number.parseInt(document.getElementById("op-two").value));
    });

    document.getElementById("substraction").addEventListener("click", function () {
        alert(Number.parseInt(document.getElementById("op-one").value) - Number.parseInt(document.getElementById("op-two").value));
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        alert(Number.parseInt(document.getElementById("op-one").value) * Number.parseInt(document.getElementById("op-two").value));
    });

    document.getElementById("division").addEventListener("click", function () {
        alert(Number.parseInt(document.getElementById("op-one").value) / Number.parseInt(document.getElementById("op-two").value));
    });
})();
