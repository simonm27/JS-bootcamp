let name = 'Simon Minifie'

console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfr'))
console.log(isValidPassword('dsdsds123'))
console.log(isValidPassword('dsdsds123password'))