const square = (num, num2) => {
    return num * num
}

console.log(square(5))

const squareLong = (num, num2) => num * num

console.log(squareLong(6))

const people = [{
    name: 'Simon',
    age: 45
},
{
    name: 'Leila',
    age: 41
},
{
    name: 'Megan',
    age: 13
}]

// const under30 = people.filter(function(person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 42)

console.log(under30)

const age41 = people.find((person) => person.age === 41)
console.log(age41.name)