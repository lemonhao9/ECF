const mailInput = document.getElementById("EmailInput")
const passwordInput = document.getElementById("PasswordInput")
const btnLoginInput = document.getElementById("btnLogin")

btnLoginInput.addEventListener("click", checkCredentials);

function checkCredentials(){
    //note à plus tard, appeler l'API pour vérifier credentials en BDD
    if(mailInput.value == "exemple@mail.fr" && passwordInput.value == "Azerty123!"){
        alert("vous êtes connecté");

        window.location.replace("/")
    }
    else{
        mailInput.classList.add("is-invalid")
        passwordInput.classList.add("is-invalid")
    }
}