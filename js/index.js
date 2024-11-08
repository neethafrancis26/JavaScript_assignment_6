const cells = document.querySelectorAll(".b input");
let text = document.getElementById("result");
let player = document.getElementById("currrentPlay");
let currentPlayer = 'X';
let bord = Array(9).fill('');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (cell.value === '' && !checkwin()) {
            cell.value = currentPlayer;
            bord[index] = currentPlayer;
            if (checkwin()) {
                text.innerHTML = `${currentPlayer} win The Game.`;
            } else if (bord.every(cell => cell !== '')) {
                text.innerHTML = `Game is in Tie`;
            }
            else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                if (currentPlayer === "X") {
                    player.innerHTML = `X Turn`;
                }
                else {
                    player.innerHTML = `O Turn`;
                }
            }
        }
    });
});

function checkwin() {
    for (let i = 0; i < 9; i += 3) {
        if (bord[i] && bord[i] === bord[i + 1] && bord[i] === bord[i + 2]) {

            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (bord[i] && bord[i] === bord[i + 3] && bord[i] === bord[i + 6]) {
            return true;
        }
    }

    if ((bord[0] && bord[0] === bord[4] && bord[0] === bord[8]) || (bord[2]) && (bord[2] === bord[4] && bord[2] === bord[6])) {
        return true;
    }

    
    return false;
}

function resetbtn() {
    bord.fill('');
    cells.forEach(element => {
        element.value = '';
    });
    currentPlayer = 'X';
    text.innerHTML = `Lets Begin!`;
    player.innerHTML = `X Turn`;
}


