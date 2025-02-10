import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/profile", "Profil", "./pages/profile.html"),
    new Route("/login", "Connexion", "./pages/auth/login.html"),
    new Route("/signin", "Inscription", "./pages/auth/signin.html"),
    new Route("/formCovoit", "Covoiturages", "./pages/formCovoit.html"),
    new Route("/vueCovoit", "Se déplacer", "./pages/vueCovoit.html")
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";