//document = la page html
//Interroger l’arbre DOM Document Object Model
//Recup element html par l'id 
let baliseZoneProposition = document.getElementById("zoneProposition")
console.log(baliseZoneProposition.clientHeight)

//Recup element via selecteur CSS avec QuerySelector
let baliseZonePropositionSpan = document.querySelector('#zoneProposition span')
console.log(baliseZonePropositionSpan)

//Recup tous les inputs de type radio via QuerySelectorAll
let listeInputRadio = document.querySelectorAll(".zoneChoix input")
for(let i = 0; i<listeInputRadio.length; i++){
    console.log(listeInputRadio[i])
}

// select via getElementById
let inputPlayerWrite = document.getElementById("inputEcriture")
let validationButton = document.getElementById("btnValiderMot")
console.log(inputPlayerWrite)
console.log(validationButton)

// select via querySelector
let placeWhereWordDisplay = document.querySelector('.zoneProposition')
let placeWhereScoreDisplay = document.querySelector('.zoneScore span')
console.log(placeWhereWordDisplay)
console.log(placeWhereScoreDisplay)

// select via querySelectorAll
let listButtonChoice = document.querySelectorAll('.optionSource input')
for(let i = 0; i<listButtonChoice.length; i++){
    console.log(listButtonChoice[i])
}

// Modifier un élément du DOM
// modification des attributs d'une balise
let baliseImage = document.getElementById("premiereImage")
baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt")
baliseImage.alt = "Ceci est une image de test modifiée"
baliseImage.src = "source/image2.jpg"
// modification des classes
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.add("noirEtBlanc")
baliseImage.classList.remove("photo")


// Creer un nouvelle élément dans une page web
// createElement + insérer balise dans l'arbre DOM ou dans la page
let nouvelElement = document.createElement("div")
// Récupérer un élément parent existant
let parentElement = document.getElementById("conteneur")
// Ajouter le nouvel élément au parent
parentElement.appendChild(nouvelElement)


// AJOUT CODE HTML
// créer et imbriquer plusieurs elements dans une page web avec "createElement"
let contenuTitre = "Azertype 2"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"
// création de la div avec un titre et un paragraphe dans cette div
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")
// ajout du texte dans le titre et le paragraphe
nouveauTitre.innerText = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe
// ajout du titre et paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)
// récupérer la balise body et ajout de la div dans le body
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)

// AJOUT CODE HTML
// créer et imbriquer plusieurs elements dans une page web avec "innerHTML" + interpolation ``
let contenuTitre = "Azertype with innerHTML"
let contenuParagraphe = "L'application pour apprendre à taper plus vite ! with innerHTML"
// Interpolation = ${}
let div = `
    <div>
        <h1>${contenuTitre}</h1>
        <p>${contenuParagraphe}</p>
    </div>`

let body = document.querySelector("body")  
body.innerHTML = div


// Exemple d'ajout d'HTML 
let ul = document.createElement("ul")
for (let i = 0; i < listeFilms.length; i++) {
    let li = document.createElement("li")
    li.textContent = listeFilms[i]
    ul.appendChild(li)
}