// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    var uniquefruits = [];
    $.each(fruits, function(i, el){
    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
});
})();
// a revoire
