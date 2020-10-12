// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

(() => {
  const run = document.getElementById("run");

  class Person {
    constructor(firstname, lastanme) {
      this.firstname = firstname;
      this.lastanme = lastanme;
    }
    set name(name) {
      const parts = name.split("");
      this.firstname = parts[0];
      this.lastanme = parts[1];
    }
  }
  run.addEventListener("click", () => {
    let.Yvan = new Person("Yvan", "Goudmant");
    console.log(Yvan.name);
    Yvan.name = "John Doe";
    console.log(Yvan.firstname + "" + Yvan.lastanme);
  });
  //Ne fonctionne pas ?!?!?!
})();
