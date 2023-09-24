// Cette fonction s'exécute lorsque l'utilisateur.ice clique sur le bouton

function myfunction() {
    let value = document.getElementById('input').value
    let div = document.createElement('div')
    div.classList.add("list_element")
    div.innerHTML = value
    let container = document.getElementById('container')
    container.appendChild(div)
}