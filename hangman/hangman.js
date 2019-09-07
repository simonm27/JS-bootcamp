

class Hangman {
    constructor(word, numberOfGuesses) {
        this.word = word.toLowerCase().split('')
        this.numberOfGuesses = numberOfGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }
    get puzzle() {
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
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (this.status !== 'Playing') {
            return
        }
            if (isUnique) {
                this.guessedLetters.push(guess)
            }
            if (isUnique && isBadGuess) {
                this.numberOfGuesses --
            }
        
    
        this.calculateStatus()
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')  // Only returns true if all letters match and accounts for spaces
    
        if (this.numberOfGuesses === 0) {
            this.status = 'Failed'
        } else if (finished) {
            this.status = 'Finished'
        } else {
            this.status = 'Playing'
        }
    }
    get statusMessage() {
        let message = ''
        if (this.status === 'Playing') {
            message = `Guesses left: ${this.numberOfGuesses}`
        } else if (this.status === 'Failed') {
            message = `Nice try! The word was "${this.word.join('')}"`
        } else {
            message = 'Great work, you guessed the word'
        }
        return message
    }
}














