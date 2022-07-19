const emailInput = document.querySelector(".email-input");
const invalid = document.querySelector(".invalid");
const inputbox = document.querySelector("input");
let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const submit = document.querySelector(".submit");

function check() {
    if (emailInput.value.match(regex)) {
        invalid.innerText = "";
        inputbox.style.borderColor = 'lightblue';
    } else {
        submit.addEventListener("click", function(event) {
        event.preventDefault();
        invalid.innerText = "Please provide a valid email address";
        inputbox.style.borderColor = 'red';
        })
    }    
}
