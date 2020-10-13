// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    const psw = document.getElementById('pass-one');
    const validity = document.getElementById('validity');

    validity.innerHTML = 'Not ok';

    function checkNums(value) {
        let reg =/\d.*\d/g;
        return reg.test(value);
    }
    password.addEventListener('input', () => {
        if (password.value.length >= 8 && checkNums(password.value)) {
            validity.innerHTML = 'OK';
        } else {
            validity.innerHTML = 'NOT OK';
        }
    })
    
    
    

})();
