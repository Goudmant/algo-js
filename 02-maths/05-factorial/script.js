
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        var a = document.getElementById("number").value;
        function factorial(a) {
            if ((a == 0) || (a == 1)) {
                return 1;
            }
            while (a > 1) {
                return (a * factorial(a - 1))
            }
        }
        alert("The result of the factorial is: " + factorial(a))
    });




    // pas de réaction sur la page.
})();
