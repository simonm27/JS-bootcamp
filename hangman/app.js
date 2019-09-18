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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getCountry("ES").then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// getCountry("ES").then((country) => {
//     console.log(country.name) 
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })

