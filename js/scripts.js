/* ************************************ */
/* PARTIE 1 : Déclaration des variables */
/* ************************************ */

// On pointe sur le bouton
const btnOpen = document.getElementById('btnPopup')

// On pointe sur la popup
const popup = document.getElementById('popup')

/* ************************************ */
/* PARTIE 2 : Déclaration des fonctions */
/* ************************************ */

// On déclare la fonction qui ouvre la popup
const openPopup = () => {
  // On pointe sur le contenu de la popup
  const popupBody = popup.querySelector('.popup_body')

  // On crée un paragraphe avec du texte dedans
  const newContent = document.createElement('p')
  newContent.innerHTML = 'Coucou !'

  // On ajoute ce nouveau paragraphe au contenu de la popup
  popupBody.appendChild(newContent)

  // On pointe sur le bouton de fermeture de la popup
  const btnClose = popupBody.querySelector('.close')
  
  // On ajoute un écouteur d'évènement sur le bouton de fermeture
  btnClose.addEventListener('click', () => {
    // On rend la popup invisible grâce à sa propriété CSS display
    popup.style.display = 'none'

    // On supprime notre paragraphe
    newContent.remove()
  })

  // On rend la popup visible grâce à sa propriété CSS display
  popup.style.display = 'flex'
}

/* ******************** */
/* PARTIE 3 : Programme */
/* ******************** */

// On ajoute un écouteur d'évènement sur le click du bouton d'ouverture de la popup
btnOpen.addEventListener('click', openPopup)
