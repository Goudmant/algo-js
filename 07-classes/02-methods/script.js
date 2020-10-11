//07-classes/02-methods/script.js - 7.2: methods

(() => {
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    sayHello() {
      return `hello, ${this.firstname} ${this.lastname}`;
    }
  }
  const run = document.getElementById("run");

  run.addEventListener("click", () => {
    let Yvan = new Person("Yvan", "Goudmant");
    console.log(Yvan.sayHello());
    alert`${sayHello}`;
  });
})();
// alert ne fonctionne pas du tout
