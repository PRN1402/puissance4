export function createRowLine(row, rowNumber) {

    const cellLine = document.createElement('tr');

    for (let cell = 0; cell < row.length ; cell++) {
        const cellElement = document.createElement('td');
        cellElement.id = rowNumber.toString() + cell.toString();
        // console.log(cellElement.id)
        cellElement.className = "token";
        cellElement.textContent = row[cell].emoji;
        // console.log(row[cell].token);
        cellLine.append(cellElement);
    }

    document.getElementById('tbody-game').append(cellLine);
}

export function displayGameArray(gameArray) {
    const tableBody = document.getElementById('tbody-game');
    tableBody.innerHTML = "";

    // const nbRows = gameArray.length - 1;
    for (let row = gameArray.length - 1; row >= 0; row--) {
        // console.log(row);
        createRowLine(gameArray[row], row);
    }
}