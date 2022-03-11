import { Gamer, whiteToken, redToken, yellowToken } from "./modules/gamer.mjs";
import { newArray } from "./modules/js-utils.mjs"
import { displayGameArray } from "./modules/dom-utils.mjs"
import { Verif } from "./modules/controller.mjs";

const nbRows = 6;
const nbCols = 7;

// TODO:  Définir joueurs
const gamer1 = new Gamer("", redToken);
const gamer2 = new Gamer("", yellowToken);

// Ajouter un nouveau jeu - Tableau
const gameArray = newArray(nbRows, nbCols, whiteToken)
console.log(gameArray[0][0]);

// Afficher le jeu
const line = gameArray[0];
console.log("Line " + line);
//line[0] = redToken;
console.log("New Line " + line);
// gameArray.splice(0, 1, line); // 1
// gameArray[0] = line; // 2
//gameArray[0][0] = redToken; // 3
// Aucun des trois ne marche !!!!
console.log(gameArray);

displayGameArray(gameArray);

let myTab=new Array(7);
//console.log("myTab.length : "+myTab.length);
function creeTab(myTab){
    for (let i=0;i<myTab.length;i++){
        myTab[i]=new Array(6);
        for (let j=0;j<myTab[i].length;j++){
            myTab[i][j]="-";
        }
        
    }
    
}
function fillTab(tab,indLi, gamer){
    console.log("filltab tab" +tab);
    console.log("filltab indLi" +indLi);
    console.log("filltab gamer" +gamer);
    
    let trouve=false;
    let i=0;
    while (i< tab[indLi].length && trouve===false){
        //console.log("tab[indLi][j] : "+  tab[indLi][i]);
        if (tab[indLi][i]==="-") {
            tab[indLi][i]=gamer;
            return i;
        }
        i++;    
    }
    return -1;
}

function litLigne(myTab,indLi){
    for (let j=0;j<myTab[indLi].length;j++){
        console.log("myTab ligne  : "+  (indLi+1)  + " N° : "+ (j+1) + "   gamer = "+  myTab[indLi][j]);
    }
    
}

creeTab(myTab);

let Joueur="D";
let gagne =false;

const ent1=document.getElementById("col-1");
const ent2=document.getElementById("col-2");
const ent3=document.getElementById("col-3");
const ent4=document.getElementById("col-4");
const ent5=document.getElementById("col-5");
const ent6=document.getElementById("col-6");
const ent7=document.getElementById("col-7");

 ent1.addEventListener('click', function () {
   let indLig= fillTab(myTab,0,Joueur);
   if (indLig>=0){
        let strTd=indLig+"0";
        let colTd = document.getElementById(strTd);
        Joueur =="D" ? colTd.innerHTML=yellowToken:colTd.innerHTML= redToken;
        litLigne(myTab,indLig);
        Verif(myTab,gagne);
        if (Joueur =="D") Joueur="P";
        else 
        if (Joueur =="P") Joueur="D";
    }


 
});


 ent2.addEventListener('click',  function () {
   let indLig= fillTab(myTab,1,Joueur);

 if (indLig>=0){
    let strTd=indLig+"1";
    let colTd = document.getElementById(strTd);
    Joueur =="D" ? colTd.innerHTML=yellowToken:colTd.innerHTML= redToken;
    litLigne(myTab,indLig);
    Verif(myTab,gagne);
    if (Joueur =="D") Joueur="P";
    else 
    if (Joueur =="P") Joueur="D";
}


  });

  ent3.addEventListener('click',  function () {
    let indLig= fillTab(myTab,2,Joueur);
    if (indLig>=0){
        let strTd=indLig+"2";
        let colTd = document.getElementById(strTd);
        Joueur =="D" ? colTd.innerHTML=yellowToken:colTd.innerHTML= redToken;
        litLigne(myTab,indLig);
        Verif(myTab,gagne);
        if (Joueur =="D") Joueur="P";
        else 
        if (Joueur =="P") Joueur="D";
    }
 
   });

   ent4.addEventListener('click',  function () {
    let indLig= fillTab(myTab,3,Joueur);
    if (indLig>=0){
        let strTd=indLig+"3";
        let colTd = document.getElementById(strTd);
        Joueur =="D" ? colTd.innerHTML=yellowToken:colTd.innerHTML= redToken;
        litLigne(myTab,indLig);
        Verif(myTab,gagne);
        if (Joueur =="D") Joueur="P";
        else 
        if (Joueur =="P") Joueur="D";
    }
 
   });

   ent5.addEventListener('click',  function () {
    let indLig= fillTab(myTab,4,Joueur);
    if (indLig>=0){
        let strTd=indLig+"4";
        let colTd = document.getElementById(strTd);
        Joueur =="D" ? colTd.innerHTML=yellowToken:colTd.innerHTML= redToken;
        litLigne(myTab,indLig);
        Verif(myTab,gagne);
        if (Joueur =="D") Joueur="P";
        else 
        if (Joueur =="P") Joueur="D";
    }
 
   });

   ent6.addEventListener('click',  function () {
    let indLig= fillTab(myTab,5,Joueur);
    if (indLig>=0){
        let strTd=indLig+"5";
        let colTd = document.getElementById(strTd);
        Joueur =="D" ? colTd.innerHTML=yellowToken:colTd.innerHTML= redToken;
        litLigne(myTab,indLig);
        Verif(myTab,gagne);
        if (Joueur =="D") Joueur="P";
        else 
        if (Joueur =="P") Joueur="D";
    }
 
   });

   ent7.addEventListener('click',  function () {
    let indLig= fillTab(myTab,6,Joueur);
    if (indLig>=0){
        let strTd=indLig+"6";
        let colTd = document.getElementById(strTd);
        Joueur =="D" ? colTd.innerHTML=yellowToken:colTd.innerHTML= redToken;
        litLigne(myTab,indLig);
        Verif(myTab,gagne);
        if (Joueur =="D") Joueur="P";
        else 
        if (Joueur =="P") Joueur="D";
    }
 
   });
 
 
 
 
 
  function litTab(myTab){
    for (let i=0;i<myTab.length;i++){
        for (let j=0;j<myTab[i].length;j++){
            console.log("myTab[i][j] : "+  myTab[i][j]);
        }
        
    }

}
//litTab(myTab);
