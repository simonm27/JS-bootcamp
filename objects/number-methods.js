let num = 23.88878

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// let min = 10
// let max = 20

// //randomly generate number between 10 and 20
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(randomNum)

//Challemge

let makeGuess = function(num) {
    let min = 1
    let max = 5

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    if (num === randomNum) {
        return `Your number ${num}. Random Number ${randomNum}. It's a match!!`
    } else {
        return `Your number ${num}. Random Number ${randomNum}. No match. Try again`
    }
}

console.log(makeGuess(3))