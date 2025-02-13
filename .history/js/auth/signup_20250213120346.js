//Implémentation scripts de vérification de champs

const inputPseudo = document.getElementById("PseudoInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnInscription = document.getElementById("btn-valider-inscription")

inputPseudo.addEventListener("keyup",validateForm);

function validateForm(){
    validateRequired(inputPseudo);
    validateMail(inputMail);
}

function validateMail(input){
    //Définition du regex
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid")
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}


function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid")
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}