// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

let age;
let nom;
let sexe;
let ville;
let isCorrect = true

function talk() {
    age = prompt(" Entre ton age: ", " ");
    nom = prompt(" Entrez votre nom: ", " ");
    sexe = prompt(" entrer votre genre: ", " ");
    ville = prompt(" Dans quelle ville habitez-vous?: ", " ");

    while (true) {
        if (confirm(`Tes inforamtion sont-elles correctes? \n Age: ${age} \n nom: ${nom}  \n Genre: ${sexe} \n ville: ${ville}`)) {
            alert("super!");
            break
        } else {
            alert("nop");
            talk()
        }



    }
}
talk()




