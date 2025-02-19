//On cible le btn qui permet de changer les infos
document.getElementById("saveEdit").addEventListener("click", function (){

//Modification du pseudo

const newUsername = document.getElementById("usernameInput").value;
    document.getElementById("username").textContent = newUsername;

//Récupération de la nouvelle bio

const newBio = document.getElementById("bioInput").value;
doccument.getElementById("bioText").textContent = newBio;

//Modification de l'image de profil

const fileInput = document.getElementById("pdpInput");
if (fileInput.isDefaultNamespace.length > 0){
    const reader = new FileReader();
    reader.onload = function (e){
        document.getElementById("profilePict").src = e.target.result;
    };
    reader.readAsDataURL(fileInput.file[0]);
}

//Fermeture de la modal

const modalElement = document.getElementById("modalEdition");
const modal = bootstrap.Modal.getInstance(modalElement);
if (modal) {
  modal.hide();
} else {
  console.error("Modal instance not found.");
}
})