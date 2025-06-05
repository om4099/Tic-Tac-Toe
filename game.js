let cells = document.querySelectorAll('.cell');
let resetButton = document.querySelector('.reset');
let currentPlayer = 'X';

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    cells.forEach((cell) => {
        cell.innerText = "";
    });
    currentPlayer = 'X';
}

const checkWinner = (winningCombinations) => {
    winningCombinations.forEach((combination) => {
        let sum = 0;
        let userInput = cells[combination[0]].innerText;
        if (userInput !== "") {
            for (let i = 0; i < combination.length; i++) {
                if (cells[combination[i]].innerText === userInput) {
                    sum++;
                }
            }
        }
        if (sum === 3) {
            alert(`Player ${userInput} wins!`);
            resetGame();
            return;
        }
    })
    let numberOfMoves = 0;
    cells.forEach((cell) => {
        if (cell.innerText !== "") {
            numberOfMoves++;
        }
    })
    if (numberOfMoves === 9) {
        alert("It's a draw!");
        resetGame();
    }
}

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.innerText === "") {
            if (currentPlayer === 'X') {
                cell.innerText = 'X';
                currentPlayer = 'O';
            } else {
                cell.innerText = 'O';
                currentPlayer = 'X';
            }
            setTimeout(() => {
                checkWinner(winningCombinations);
            }, 0);
        }
    })
})

resetButton.addEventListener('click', () => {
    resetGame();
})