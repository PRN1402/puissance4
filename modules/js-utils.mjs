export function newArray(nbRow, nbCol, cellDesc){
    const array = []
    for (let j = 0; j < nbRow; j++){
        let row = [];
        for (let i = 0; i < nbCol; i++) {
            row.push(cellDesc);
        }
        array.push(row);
    }
    return array;
}

export function emptyArray(array, token) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = token;
        }
    }
}

export function drawRandomFirstGamer(array) {
    if (array && array.length > 0)
        return array[Math.floor(Math.random() * array.length)];
    else
        return null;
}

export function switchPlayer() {

}

export function getNextRowEmpty(array, colIndex) {
    let rowIndex = 0;
    while (array[rowIndex][colIndex].code !== "-" && rowIndex < array.length) {
        rowIndex++
    }
    return rowIndex
}