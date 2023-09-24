let texteQuiTourne = document.createElement('span')
texteQuiTourne.innerHTML = "Je n'arrive pas à décider ma couleur du jour (Passez votre curseur sur moi)"
texteQuiTourne.addEventListener('mouseover', (e) => {
    let random = Math.floor(Math.random()*360)
    let random_percentage = Math.floor(Math.random()*100)
    console.log(random)
    e.target.style.color = `hsl(${random}, ${random_percentage}%, ${random_percentage}%)`
})
document.body.append(texteQuiTourne)




// Cette fonction s'exécute lorsque l'utilisateur.ice clique sur le bouton

function myfunction() {
    let value = document.getElementById('input').value
    let div = document.createElement('div')
    div.classList.add("list_element")
    div.innerHTML = value
    let container = document.getElementById('container')
    container.appendChild(div)
}