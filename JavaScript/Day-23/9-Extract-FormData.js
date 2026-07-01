let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // let input = document.querySelectorAll("input")[0];
    // let password = document.querySelectorAll("input")[1];
    
    // 2nd way to access input elements
    let input = this.elements[0];
    let password = this.elements[1];

    let userName = "Abdul Rehman";
    let orgPassword = "rehman2757";

    if ( (input.value == userName) && (orgPassword == password.value)) {
        alert(`Registered with ${userName}`);
    } else {
        alert("Not Registered");
    }

});