
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

// On "colle" notre paragraphe au body de la page
document.body.append(texteQuiTourne)




// Cette fonction s'exécute lorsque l'utilisateur.ice clique sur le bouton

function myfunction() {

    // On récupère la valeur entrée dans l'input
    let value = document.getElementById('input').value

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