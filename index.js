/* Ce fichier contient la partie interaction de notre site internet */
// On crée un paragraphe
let texteQuiTourne = document.createElement('span')

// On écrit dans le paragraphe
texteQuiTourne.innerHTML = "Je n'arrive pas à décider ma couleur du jour (Passez votre curseur sur moi)"

// On ajoute un évènement à notre paragraphe qui s'exécute lorsque l'utilisateur.ice apsse le curseur au dessus du paragraphe
texteQuiTourne.addEventListener('mouseover', (e) => {
    // On tire deux nombres "aléatoirement"
    let random = Math.floor(Math.random()*360)
    let random_percentage = Math.floor(Math.random()*100)

    // On utilise nos valeurs random pour changer aléatoirement la couleur du paragraphe
    e.target.style.color = `hsl(${random}, ${random_percentage}%, ${random_percentage}%)`
})

// On récupère le div dans lequel on insère notre texte qui change de couleur
let color_text_box = document.getElementById('color_text')

// On "colle" notre paragraphe dans  le div
color_text_box.append(texteQuiTourne)




// Cette fonction s'exécute lorsque l'utilisateur.ice clique sur le bouton

function myfunction() {

    // On récupère la valeur entrée dans l'input et on l'affiche dans la console
    let value = document.getElementById('input').value
    console.log(value)

    /* 
    Pour ouvrir la console:
    Sur MacOS: cmd + maj + j
    Sur Windows: ctrl + maj + j 
    */

    // On crée une boîte dans laquelle l'écrire
    let div = document.createElement('div')

    // On lui ajoute la classe "list_element"
    div.classList.add("list_element")

    // On écrit la valeur de l'input dans la boîte
    div.innerHTML = value

    // On récupère le container créé dans le fichier index.hmtl
    let container = document.getElementById('container')

    // On ajoute notre boîte contenant le texte de l'input au container
    container.appendChild(div)
}

// On crée un retour à la ligne et l'ajoute à la page
let br = document.createElement('br')
document.body.appendChild(br)

// On crée une boîte pour contenir un bouton
let div_bouton = document.createElement('div')

// On crée un bouton et on lui donne un texte
let bouton = document.createElement('button')
bouton.innerHTML = "Get funky !"

// On ajoute une interaction, une fonction s'exécute lorsqu'on click sur le bouton
bouton.addEventListener('click', () => {

    // On récupère tous les éléments 'p' de la page dans une liste
    let paragraphes = document.querySelectorAll('p')

    // On parcourt les éléments de la liste et pour chaque élément on change sa couleur de background
    for(let i = 0; i < paragraphes.length; i++) {
        paragraphes[i].style.backgroundColor = "purple"
    }
})

// On ajoute le bouton à la boîte créée pour ça
div_bouton.appendChild(bouton)

// On ajoute la boîte à la page
document.body.appendChild(div_bouton)