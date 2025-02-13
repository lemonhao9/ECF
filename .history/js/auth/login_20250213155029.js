const mailInput = document.getElementById("EmailInput")
const passwordInput = document.getElementById("PasswordInput")
const btnLoginInput = document.getElementById("btnLogin")

btnLoginInput.addEventListener("click", checkCredentials);

function checkCredentials(){
    alert("btn clicked")
}