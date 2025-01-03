//addEventListener avec le mot-clé function
// Définition de la fonction anonyme
//let monBouton1 = document.getElementById("bouton1")
//monBouton1.addEventListener("click", function() {
//    console.log("Vous avez cliqué sur ce bouton")
//    body.style.backgroundColor="red"
//})
function bouton(){
    for(let i=0; i<listBoutons.length; i++){
        let boutonActuel = listBoutons[i]
        console.log(boutonActuel)

        // Définition de la fonction fléchée
        boutonActuel.addEventListener("click", (event) => {
            let monBouton = event.target
            console.log(`Vous avez cliqué sur le bouton : ${monBouton.id}`)
            console.log(event)
            console.log(event.key) //la touche appuyée quand l’événement écouté est lié au clavier
            console.log(event.target) //renvoie l’élément HTML qui a déclenché l’événement
            console.log(event.clientX) //coordonnées de la souris quand l’événement écouté est lié à la souris.
        })
    }
}

// Faire intéragir une page web avec Javascript
/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

/**
 * Prendre en paramètre le mot à afficher, et afficher ce mot dans la div zoneProposition
 * @param {string} motAfficher 
 */
function afficherProposition(motAfficher){
    console.log(motAfficher)
    let zoneProposition = document.querySelector(".zoneProposition")
    let div = `<div>${motAfficher}</div>`
    zoneProposition.innerHTML = div
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let score = 0

    // récupérez le bouton de validation
    let btnValider = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0
    afficherProposition(listeMots[0])
    
    //Ecoute de l'event lorsque clique sur btn Valider
    btnValider.addEventListener("click", (event) => {
        console.log(inputEcriture.value)
        if(inputEcriture.value===listeMots[i]){
            score++
        }
        i++
        afficherResultat(score, i)
        // Vider la section ou l'utilisateur saisie le texte
        inputEcriture.value=""
        if(typeof listeMots[i]!=='undefined'){
            //Valeur saisie par le user
            afficherProposition(listeMots[i])
        } else {
            afficherProposition("Le jeu est fini")
            //Récupérer les infos sur l'évènement
            event.target.disabled = true
        }
    })
    afficherResultat(score, i)
}
