//email
const emailInput = document.querySelector(".email-input");
const invalid = document.querySelector(".invalid");
const inputbox = document.querySelector("input");
const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
//submit
const submit = document.querySelector(".submit");

//turn red when invalid
emailInput.onkeydown = function () {
    if (regex.test(emailInput.value)) {
        invalid.innerText = "";
        inputbox.style.borderColor = "";
    } else {
        invalid.innerText = "Please provide a valid email address";
        inputbox.style.borderColor = 'red';

        submit.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Please provide a valid email address");
        })
    }    
}
