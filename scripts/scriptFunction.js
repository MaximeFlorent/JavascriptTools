
function afficherResultat(score, nombreQuestions){
    return console.log("Votre score est de "+ score + " sur " + nombreQuestions)
}

function afficherScoreFinal(score, nombreQuestions){
    return console.log("Score final : " + score + " sur "+ nombreQuestions)
}

function afficheUnNombre(){
    let monNombreLocal = 2
    console.log("Intérieur de la fonction : ")
    console.log(monNombre)
    console.log(monNombreLocal)
}

function choisirPhrasesOuMots(){
    let choix = prompt('Voulez-vous jouer avec les mots (entrez "mots") ou les phrases (entrez "phrases") ?')
    while((choix!=="mots" && choix!=="phrases")){
        choix = prompt("Taper “mots” ou “phrases” pour séléctionner votre liste")
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions){
    let score = 0
    for(let i = 0; i<listePropositions.length; i++){
        let motUtilisateur = prompt("Ecrire le mot : " + listePropositions[i])
        if(motUtilisateur===listePropositions[i]){
            score++
            
        }
        afficherResultat(score, listePropositions.length)
    }
    afficherScoreFinal(score, listePropositions.length)
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots()

    if(choix==="mots"){
        lancerBoucleDeJeu(listeMots)
    }else {
        lancerBoucleDeJeu(listePhrases)
    }
}