//Implémentation scripts de vérification de champs

const inputPseudo = document.getElementById("PseudoInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnInscription = document.getElementById("btn-valider-inscription");

inputPseudo.addEventListener("keyup",validateForm);
inputMail.addEventListener("keyup",validateForm);
inputPassword.addEventListener("keyup",validateForm)

function validateForm(){
    const pseudoOk = validateRequired(inputPseudo);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);

    if(pseudoOk && mailOk && passwordOk){
        btnInscription.disabled = false;
    }
    else{
        btnInscription.disabled = true;
    }
}

function validateMail(input){
    //Définition du regex mail
    const emailRegex = /^[a-zA-Z0-9.-]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid")
        inputConfirmPwd.classList.remove("is-invalid")
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid")
        inputConfirmPwd.classList.remove("is-valid")
        return false;
    }
}

function validatePassword(input){
    //Définition du regex mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}