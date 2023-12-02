function validarEmail() {
    var email = document.querySelector("#email");
    var error = document.querySelector("#error-email")
    var errorSimble = document.querySelector("#error")

    if(!email.checkValidity()) {
        error.innerHTML = "Please provide a valid email"
        errorSimble.style.display = 'block';
}

function redefinirMsg() {
    var error = document.querySelector("error-email");
    if(error.innerHTML == "Please provide a valid email") {
        error.innerHTML = "";
    }
}

}