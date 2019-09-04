

const Hangman = function(word, numberOfGuesses) {
    this.word = word.toLowerCase().split('')
    this.numberOfGuesses = numberOfGuesses
    this.guessedLetters = []
    this.status = 'Playing'
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.numberOfGuesses --
    } 
    this.calculateStatus()
}

Hangman.prototype.calculateStatus = function() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))  // Only returns true if all letters match
    
    if (this.numberOfGuesses === 0) {
        this.status = 'Failed'
    } else if (finished) {
        this.status = 'Finished'
    } else {
        this.status = 'Playing'
    }
}


const gameOne = new Hangman('Cat', 2)






