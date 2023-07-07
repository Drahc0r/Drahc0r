
// ____________________________________NAVBAR__________________________________



let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});



// _____________________EFFET TEXTE QUI S'ÉCRIT TOUT SEUL________________________

 // Définir le texte à ajouter
 var texte = "ALEX ROCHARD DÉVELOPPEUR WEB FULLSTACK :";
 var index = 0;

 // Récupérer l'élément HTML à modifier
 var titre = document.getElementById("progressivtext");

 // Fonction pour ajouter le texte progressivement
 function ajouterTexte() {
   // Ajouter le caractère suivant au texte
   titre.innerHTML += texte[index];

   // Incrémenter l'index
   index++;

   // Vérifier si tous les caractères ont été ajoutés
   if (index == texte.length) {
     // Arrêter la boucle de mise à jour
     clearInterval(interval);

     // Afficher le curseur d'écriture en clignotant
     var cursor = document.createElement("span");
     cursor.innerHTML = "|";
     titre.appendChild(cursor);
     setInterval(function() {
       cursor.style.opacity = (cursor.style.opacity == "1"? "0" : "1");
     }, 500);
   }
 }

 // Démarrer la boucle de mise à jour toutes les 50 millisecondes
 var interval = setInterval(ajouterTexte, 50);




//  ___________________FIN EFFET TEXTE QUI S'ÉCRIT TOUT SEUL___________________________