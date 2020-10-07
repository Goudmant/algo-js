
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    (function () {

        var month = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");
        var number = new Array("un", "deux", "trois")

        document.getElementById("run").addEventListener("click", function () {

            vdd = 0; //OPTIONEL contient le nombre de vendredi 13, comme iy en a maximum 3 par années (merci google) elle servira a transformer le nombre en texte avec l'array plus haut
            thisyear = document.getElementById("year").value; //OPTIONEL récupère l'année pour l'afficher dans rep
            year = new Date(+document.getElementById("year").value, 0); //récupère l'année en la mettant dans une variable date, le mois est mit à 0 car on est obligé d'indiquer au mois une année et un mois
            today = new Date(); //OPTIONEL date du jour pour le temps du verbe

            rep = "";   //contient la chaine de caractères qui sera affiché
            s = "";     //OPTIONEL contient le pluriel
            x = "";     //OPTIONEL contient le pluriel
            times = ""; //OPTIONEL contient le temps du verbe (passé présent ou futur)

            for (i = 0; i < 12; i++) { //boucle qui fait 12 tours de boucle, une par mois

                year.setMonth(i, 13);  //défni le mois sur la valeur de i et le jour sur le 13ème du mois

                if (year.getDay() == 5) {  //si le jour est le 5ème de la semaine (ne pas confondre DATE et DAY!!!) alors c'est un vendredi
                    rep = rep + "<br/>" + month[i]; //écrit dans rep le nom du mois grace à l'array contenant tout les mois
                    vdd = vdd + 1; //OPTIONEL compte le nombre de vendredi
                }
            }
            if (vdd != 1) { //OPTIONEL met au pluriel si il n'y a plus de 1 vendredi 13
                s = "s";
                x = "x";
            }

            if (year.getFullYear() < today.getFullYear()) { //OPTIONEL met le verbe au temps en fonction de l'année choisie
                times = "a eu";
            }
            if (year.getFullYear() > today.getFullYear()) {
                times = "aura";
            }
            if (year.getFullYear() == today.getFullYear()) {
                times = "a";
            }

            vdd = year[vdd - 1]; //OPTIONEL transforme le nombre en sa valeur écrite, les tableaux commensant à 0 il faut lui retirer 1

            rep = "En " + thisyear + ", il y " + times + " " + vdd + " vendredi" + s + " 13 au" + x + " mois suivant" + s + ":<br/>" + rep; //création de la chaine de caractères qui sera la réponse
            document.getElementById("target").innerHTML = rep; //Affiche la réponsse. J'ai ajouté la section contenant un le target d'une autre page du cours afin d'afficher dans la page
        })

    })();

})();
