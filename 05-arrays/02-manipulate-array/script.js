// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById('run')
    fruits.shift();
    fruits.pop();
    fruits.unshift('banane')
    fruits.push('kiwi'),

        run.addEventListener('click', function () {
            alert(fruits);
        })

})();
