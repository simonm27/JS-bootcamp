const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')

const gameOne = new Hangman('Car Parts', 2)


puzzleEl.textContent = gameOne.puzzle
guessEl.textContent = gameOne.statusMessage
//guessEl.textContent = gameOne.numberOfGuesses
//statusEl.textContent = `Game Status: ${status}`

const guess = window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    puzzleEl.textContent = gameOne.puzzle
    guessEl.textContent = gameOne.statusMessage
})

getPuzzle("1", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry("ES", (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(country.name)
    }
})

