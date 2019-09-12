//multiple arguments
let add = function(a, b) {
    return a + b
}

let result = add(7, 3)
console.log(result)

//default arguments
let getScoreText = function(name = 'anon', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

console.log(getScoreText('Simon', 445))

//Challenge

let getTip = function(total, tipPercent = .2) {
    return total + (total * tipPercent)
}

console.log(getTip(100))