//Implémentation scripts de vérification de champs

const inputPseudo = document.getElementById("PseudoInput");
inputPseudo.addEventListener("keyup",validateForm);

function validateForm(){
    validateRequired(inputNom)
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