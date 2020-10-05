
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        commutateur(opération) {
            cas  'addition' :
            alert(Number.parseInt(document.getElementById("op-one").value) + Number.parseInt(document.getElementById("op-two").value)); pause;
            cas  'soustraction' :
            alert(Number.parseInt(document.getElementById("op-one").value) - Number.parseInt(document.getElementById("op-two").value)); pause;
            cas  'multiplication' :
            alert(Number.parseInt(document.getElementById("op-one").value) * Number.parseInt(document.getElementById("op-two").value)); pause;
            cas  'division' :
            alert(Number.parseInt(document.getElementById("op-one").value) / Number.parseInt(document.getElementById("op-two").value)); pause;
        };

        Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
            $btn.addEventListener(
                "click",
                () => (performOperation($btn.id), false),
            ),
        );
    })();
