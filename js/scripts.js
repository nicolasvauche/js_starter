/* PARTIE 1 : Déclaration des variables */

// On pointe sur le bouton
const button = document.getElementById('submit')

// On récupère le prénom saisi dans l'input
const prenom = document.getElementById('prenom')

// On pointe sur le paragraphe
const paragraphe = document.getElementById('texte')

/* PARTIE 2 : Déclaration des fonctions */

// On déclare la fonction qui écrira dans le paragraphe
const ecrirePrenom = () => {
  // On modifie le contenu du paragraphe
  paragraphe.innerHTML = prenom.value
}

/* PARTIE 3 : Programme */

// On ajoute un écouteur d'éveènement sur le click du bouton
button.addEventListener('click', ecrirePrenom)
