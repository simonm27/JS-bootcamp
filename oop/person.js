//Prototypal Inheritance

const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function(fullName) {
    const name = fullName.split(' ')
    this.firstName = name[0]
    this.lastName = name[1]
}

const me = new Person('Simon', 'Minifie', 45, ['drinking', 'coding'])

me.getBio = function() {
    return 'This is fake'
}

me.setName('Bob Bojangles')
console.log(me.getBio())

const leila = new Person('Leila', 'Minifie', 41)

console.log(leila.getBio())