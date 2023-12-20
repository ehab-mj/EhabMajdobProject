const words = ['hangman', 'javascript', 'programming', 'computer', 'luffy', 'sanji', 'nami', 'zoro', 'gojo', 'women', 'bambozo', 'apple', 'bananna', 'fruit', 'drink'];
let selectedWord = '';
let guessedWord = [];
let wrongGuesses = 0;
const maxWrongAttempts = 6;

// select a random word from the words array
function selectWord() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = new Array(selectedWord.length).fill('_');
}

// display the current state of the word with underscores and correctly guessed letters
function displayWord() {
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.textContent = guessedWord.join(' ');
}

// update the guessed word with correct guesses
function updateGuessedWord(letter) {
    let found = false;
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            guessedWord[i] = letter;
            found = true;
        }
    }
    return found;
}

// Function to handle a guess
function makeGuess() {
    const input = document.getElementById('guess-input');
    const guess = input.value.toLowerCase();

    if (guess && guess.length === 1 && guess.match(/[a-z]/)) {
        const found = updateGuessedWord(guess);
        if (!found) {
            wrongGuesses++;
            updateWrongGuesses();
        }

        displayWord();
        checkGameStatus();
    }

    input.value = '';
    input.focus();
}

//  update the count of wrong guesses
function updateWrongGuesses() {
    const wrongGuessesDisplay = document.getElementById('wrong-guesses');
    wrongGuessesDisplay.textContent = wrongGuesses.toString();
}

//check the game status (win/lose)
function checkGameStatus() {
    if (guessedWord.join('') === selectedWord) {
        showMessage('Congratulations! You won!');
        disableInput();
    } else if (wrongGuesses === maxWrongAttempts) {
        showMessage(`Game over! The word was "${selectedWord}". Try again!`);
        disableInput();
    }
}

//display a message on the screen
function showMessage(message) {
    const messageDisplay = document.getElementById('message');
    messageDisplay.textContent = message;
}

// reset the game
function resetGame() {
    selectedWord = '';
    guessedWord = [];
    wrongGuesses = 0;
    selectWord();
    displayWord();
    updateWrongGuesses();
    showMessage('');
    enableInput();
}

//disable input elements
function disableInput() {
    document.getElementById('guess-input').disabled = true;
    document.querySelector('button').disabled = true;
}

//enable input elements
function enableInput() {
    document.getElementById('guess-input').disabled = false;
    document.querySelector('button').disabled = false;
}

// Initialize the game when the page loads
window.onload = function () {
    selectWord();
    displayWord();
    updateWrongGuesses();
};