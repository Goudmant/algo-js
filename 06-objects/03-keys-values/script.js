// 06-objects/03-keys-values/script.js - 6.3: keys & values

(() => {
  const person = {
    lastname: "Delnatte",
    firstname: "Pierre-Antoine",
    nickname: "Leny",
    birthDate: "08-05-1985",
    city: "Liège",
    status: "married",
  };

  const run = document.getElementById("run");
  run.addEventListener("click", () => {
    for (let contenue in person) {
      console.log(`${k}: ${person[contenue]}`);
    }
  });
})();
