// 06-objects/01-generate-object/script.js - 6.1: genererate an object

(() => {
  const run = document.getElementById("run");

  run.addEventListener("click", () => {
    let me = {
      firstname: "Yvan",
      lastname: "Goudmant",
      age: "30 ans",
      city: "Namur",
      cityofheart: "Bruxelle",
      country: "Belgium",
      astrologicalsign: "scorpio",
      size: "1,80m",
      eyecolors: "Green",
    };
    console.log(me);
    alert(`Bonjour vous ! Je me présente ${me.firstname} ${me.lastname}, j\'ai ${me.age} . j\'habite depuis presque 6 ans ${me.city}, en ${me.country} mais je viens de ${me.cityofheart}. Si vous voulez tous s\'avoir je suis ${me.sign}, mesure ${me.size} et j\'ai les yeux ${me.eye} Beau gosse !`);
  });
})();
