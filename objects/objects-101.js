let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326 
}

let description = `${myBook.title} by ${myBook.author}`

console.log(description)

myBook.title = 'Animal Farm'

description = `${myBook.title} by ${myBook.author}`

console.log(description)

let person = {
    name: 'Simon',
    age: 45,
    location: 'Worcester'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age++
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)