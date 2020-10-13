// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    const psw1 = document.getElementById('passe-one');
    const psw2 = document.getElementById('passe-two');

    function checkPasse(pass1, pass2) {
        if (pass1.value !== pass2.value) {
            pass1.classList.add('error');
            pass2.classList.add('error');
        }
    }
    run.addEventListener('click', () =>{
        checkPasse(passOne, passTwo);
    } )

})();
