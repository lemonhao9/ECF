//On cible le btn qui permet de changer les infos
document.getElementById("saveInfo").addEventListener("click", function () {
  //Ici on va récuperer les valeurs de champs de la modal
  const vehicule = document.getElementById("editVehiculeInput").value;
  const marque = document.getElementById("editMarqueInput").value;
  const modele = document.getElementById("editModeleInput").value;
  const couleur = document.getElementById("editCouleurInput").value;
  const energie = document.getElementById("editEnergieInput").value;
  const plaque = document.getElementById("editPlaqueInput").value;
  const dateImmat = document.getElementById("editDateImmatInput").value;
  const placesDisp = document.getElementById("editPlacesDispInput").value;
  const fumeurs = document.getElementById("editFumeursInput").value;
  const animaux = document.getElementById("editAnimauxInput").value;
  const music = document.getElementById("editMusicInput").value;
  const speak = document.getElementById("editSpeakInput").value;

  //Les nouvelles valeurs remplaces les champs en readonly
  document.getElementById("vehiculeInput").value = vehicule;
  document.getElementById("marqueInput").value = marque;
  document.getElementById("modeleInput").value = modele;
  document.getElementById("couleurInput").value = couleur;
  document.getElementById("energieInput").value = energie;
  document.getElementById("plaqueInput").value = plaque;
  document.getElementById("dateImmatInput").value = dateImmat;
  document.getElementById("placesDispInput").value = placesDisp;
  document.getElementById("fumeursInput").value =
    fumeurs === "smokeAnthorised" ? "Autorisés" : "Non autorisés";
  document.getElementById("animauxInput").value =
    animaux === "anxAuthorised" ? "Autorisés" : "Non autorisés";
  document.getElementById("musicInput").checked = music;
  document.getElementById("speakInput").checked = speak;

  //Puis on ferme la modal
  const modal = new bootstrap.Modal(document.getElementById("editmodal"));
  modal.hide();
});