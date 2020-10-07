
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {


    const day = document.getElementById("dob-day");
    const month = document.getElementById("dob-month");
    const year = document.getElementById("dob-year");

    run.addEventListener('click', function () {
        let birthday = new Date(parseInt(year.value), (parseInt(month.value) - 1), parseInt(day.value)).getTime();
        console.log(birthday);
        let now = new Date().getTime();
        let ageTime = now - birthday;
        let age = new Date(ageTime).getFullYear() - 1970;
        alert(`tu as ${age} ans`);
    })



    //function submitBirthday() {
    //var birthday = document.getElementById("myBirthday").value;
    //document.getElementById("displayBirthday").innerHTML = ("You are " + birthday + " years old.");
    //}

})();
