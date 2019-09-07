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
   // statusEl.textContent = `Game Status: ${status}`
})

//Making an http request
const request = new XMLHttpRequest() 

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = 'US'

const request2 = new XMLHttpRequest()

request2.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        let country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
        } else if (e.target.readyState === 4) {
            console.log('Unable to fetch data')
        }
})

request2.open('GET', 'http://restcountries.eu/rest/v2/all')
request2.send()