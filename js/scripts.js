/* ************************************ */
/* PARTIE 1 : Déclaration des variables */
/* ************************************ */

// On pointe sur le formulaire
const form = document.getElementById('form')

// On pointe sur le paragraphe
const paragraphe = document.getElementById('texte')

/* ************************************ */
/* PARTIE 2 : Déclaration des fonctions */
/* ************************************ */

// On déclare la fonction qui validera le formulaire
const validateForm = event => {
  // On crée un compteur d'erreurs, initialisé à zéro
  let errors = 0

  // On bloque la soumission automatique par le navigateur
  event.preventDefault()

  // On récupère les données de notre formulaire
  const formElements = form.elements

  // On débug les données de notre formulaire dans la console
  for (const formElement of formElements) {
    // On pointe sur le paragraphe d'erreur proche de l'élément de formulaire
    const error = formElement.parentNode.querySelector('.error')

    // On vérifie que le paragraphe existe bien avant de le modifier
    if (error) {
      // On vide les paragraphes avant tout
      paragraphe.innerHTML = ''
      error.innerHTML = ''

      // Si la validation renvoie false
      if (!formElement.checkValidity()) {
        // On incrémente notre compteur d'erreurs
        errors++

        // On écrit le message d'erreur dans le paragraphe
        error.innerHTML = formElement.validationMessage
      }
    }
  }

  // Si à la fin de la boucle, le compteur d'erreurs est toujours à zéro, alors on continue…
  if (!errors) {
    paragraphe.innerHTML = 'Le formulaire est OK !'
  }
}

/* ******************** */
/* PARTIE 3 : Programme */
/* ******************** */

// On ajoute un écouteur d'évènement sur le submit du formulaire
form.addEventListener('submit', event => {
  validateForm(event)
})
