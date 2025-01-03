
let listeMots = ["mot1", "mot2", "mot3"]
let score = 0

while(score!==1){
    let motUtilisateur = prompt("Entrez un mot : " + listeMots[0])
    if(motUtilisateur===listeMots[0]){
        score++
    }
}

while(score!==2){
    let motUtilisateur = prompt("Score = " + score + " Entrez le deuxième mot : " + listeMots[1])
    if(motUtilisateur===listeMots[1]){
        score++
    }
}

while(score!==3){
    let motUtilisateur = prompt("Score = " + score + " Entrez le troisième mot : " + listeMots[2])
    if(motUtilisateur===listeMots[2]){
        score++
    }
}

console.log("Bravo !!")

//switch (motUtilisateur){
//    case listeMots[0]:
 //       score++
 //       motUtilisateur = prompt("Score = " + score + " Bravo passez au second mot ! : " + listeMots[1])
 //       switch (motUtilisateur){
 //           case listeMots[1]:
  //              score++
  //              motUtilisateur = prompt("Score = " + score + " Bravo passez au troisième mot ! : " + listeMots[2])
  //              switch (motUtilisateur){
  //                  case listeMots[2]:
  //                      score++
   //                     console.log("Score = " + score + " Bravo vous avez fini !")
   //                     break
   //                     default:          
   //                         console.log("Vous avez fait une erreur au troisième mot. Votre Score est de "+score)
   //                         break
    //            }
    //            break
   //         default:          
   //             console.log("Vous avez fait une erreur au second mot. Votre Score est de "+score)
    //            break
    //    }
   //     break
   // default:          
    //    console.log("Vous avez fait une erreur au premier mot. Votre Score est de "+score)
    //    break
//}


//if(motApplication === motUtilisateur){
    //console.log("Bravo, vous avez correctement tapé le mot")
//}else{
    //if(motUtilisateur==="Gredin"){
    //    console.log("Restez Correct !")
    //}else{
    //    if(motUtilisateur==="Mécréant"){
    //        console.log("Restez Correct !")
    //    }else{
    //        if(motUtilisateur==="Vilain"){
    //            console.log("Restez Correct !")
    //        }else{
    //            console.log("Echec, le mot est incorrect")
    //        }
    //    }
//
   // }
//}