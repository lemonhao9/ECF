import Route from "./Route.js"

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "./pages/home.html"),
  new Route(
    "/profile",
    "Profil",
    "./pages/auth/profile.html",
    "./js/auth/infoModif.js"
  ),
  new Route(
    "/login",
    "Connexion",
    "./pages/auth/login.html",
    "./js/auth/login.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    "./pages/auth/signup.html",
    "./js/auth/signup.js"
  ),
  new Route(
    "/formCovoit",
    "Covoiturages",
    "./pages/covoiturages/formCovoit.html"
  ),
  new Route("/vueCovoit", "Se déplacer", "./pages/covoiturages/vueCovoit.html"),
  new Route(
    "/historiqueCovoit",
    "Historique des covoiturages",
    "./pages/covoiturages//historiqueCovoit.html"
  ),
]

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide"
