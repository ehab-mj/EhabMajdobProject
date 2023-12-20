document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('game-board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const restartBtn = document.getElementById('restart-btn');

    let currentPlayer = 'X';
    let gameOver = false;

    // Initialize the game board
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    // Function to check if a player has won
    function checkWinner() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                gameOver = true;
                status.innerText = `Player ${currentPlayer} wins!`;
                break;
            }
        }

        if (!gameOver && !gameBoard.includes('')) {
            gameOver = true;
            status.innerText = "It's a draw!";
        }
    }

    // Handle cell click event
    function handleCellClick(e) {
        const index = parseInt(e.target.getAttribute('data-cell'));

        if (!gameOver && gameBoard[index] === '') {
            gameBoard[index] = currentPlayer;
            e.target.innerText = currentPlayer;
            checkWinner();
            if (!gameOver) {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.innerText = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    // Add click event listener to cells
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    // Restart game
    restartBtn.addEventListener('click', function () {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameOver = false;
        status.innerText = `Player ${currentPlayer}'s turn`;
        cells.forEach(cell => {
            cell.innerText = '';
        });
    });
});
