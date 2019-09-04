const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')


puzzleEl.textContent = gameOne.getPuzzle()
guessEl.textContent = gameOne.numberOfGuesses
statusEl.textContent = `Game Status: ${gameOne.status}`

const guess = window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    puzzleEl.textContent = gameOne.getPuzzle()
    guessEl.textContent = gameOne.numberOfGuesses
    statusEl.textContent = `Game Status: ${gameOne.status}`
})