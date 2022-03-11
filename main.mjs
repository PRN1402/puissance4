import { Gamer, whiteToken, redToken, yellowToken } from "./modules/gamer.mjs";
import { newArray, emptyArray, drawRandomFirstGamer, getNextRowEmpty } from "./modules/js-utils.mjs"
import { displayGameArray } from "./modules/dom-utils.mjs"
import { verif } from "./modules/controller.mjs";

const nbRows = 6;
const nbCols = 7;

// TODO:  Définir joueurs
const gamer1 = new Gamer("", redToken);
const gamer2 = new Gamer("", yellowToken);
let currentGamer = gamer1;

// Ajouter un nouveau jeu - Tableau
const gameArray = newArray(nbRows, nbCols, whiteToken);
// console.log(gameArray[0][0]);

// Test de mise à jour d'une cellule pour l'affichage
// gameArray[0][0] = redToken; // à commenter
// console.log(gameArray);

// Afficher le jeu
displayGameArray(gameArray);

let gagne = false;

// Initialiser un nouveau jeu =>  (bouton New game!)
document.getElementById('btn-new-game').addEventListener('click', function () {
    emptyArray(gameArray, whiteToken);
    displayGameArray(gameArray);
    document.getElementById('form-gamer').reset();
    gamer1.firstName = "";
    gamer2.firstName = "";
    gagne=false;
    document.getElementById('p-current-gamer').textContent = "Player: Not yet player";
});

// Gestion des joueurs et tirage au sort du premier joueur
document.getElementById('form-gamer').addEventListener('submit', function (event) {
    event.preventDefault();

    const formValues = {
        gamer1: document.getElementById('gamer-1').value,
        gamer2: document.getElementById('gamer-2').value
    };

    gamer1.firstName = formValues.gamer1;
    gamer2.firstName = formValues.gamer2;

    currentGamer = drawRandomFirstGamer([gamer1, gamer2]);
    document.getElementById('p-current-gamer').textContent = "Player: " + currentGamer.firstName + " " + currentGamer.token.emoji;
});

// Gestion de la colonne sélectionnée et changement de currentGamer
document.getElementById('thead-game').addEventListener('click', function (event) {
    if (event.target && event.target.matches('.btn-col-selected')&&gagne==false) {
        const row = event.target.closest('button');
        const colIndex = row.value;
        // console.log(parseInt(colIndex));
        const rowIndex = getNextRowEmpty(gameArray, colIndex);
        console.log(parseInt(rowIndex));
        const cellClassId = rowIndex + colIndex;
        console.log(cellClassId);
        console.log(currentGamer.token);
        document.getElementById(cellClassId).textContent = currentGamer.token.emoji;
        gameArray[rowIndex][parseInt(colIndex)] = currentGamer.token; // à commenter
         console.log("currrrrrrrentggggggggggggg  : "+currentGamer.firstName);
        gagne =verif(gameArray,gagne);
        if (gagne)   { document.getElementById('p-current-gamer').textContent = "Player: " + currentGamer.firstName + " " + currentGamer.token.emoji + "win the game!";
        } else {
            currentGamer = (currentGamer === gamer1) ? gamer2 : gamer1;
            document.getElementById('p-current-gamer').textContent = "Player: " + currentGamer.firstName + " " + currentGamer.token.emoji;
        }
    }
});


// console.log(gameArray);