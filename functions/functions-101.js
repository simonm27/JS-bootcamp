let greetUser = function() {
    console.log('Welcome user')
}

greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

let convert = function(temp) {
   let celcius  = (temp - 32) * 5 / 9
   return celcius  
}

let fahrenheit = convert(68)
console.log(fahrenheit)