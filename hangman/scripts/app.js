const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')

let gameOne

const guess = window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessEl.textContent = gameOne.statusMessage 

    gameOne.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

    // gameOne.puzzle.forEach((letter) => {
    //     const letterSpan = document.createElement('span')
    //     letterSpan.textContent = letter
    //     puzzleEl.appendChild(letterSpan)
    // })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    gameOne = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })
