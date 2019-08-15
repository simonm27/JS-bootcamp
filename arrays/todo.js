const todos = ['Cut the lawn', 'Feed the cat', 'Wash the car', 'Learn javascript', 'Cook tea']

todos.splice(2, 1)
todos.push('Work')
todos.shift()

console.log(`You have ${todos.length} todos`)
todos.forEach(function(todo, index) {
    console.log(`${index +1}. ${todo}`)
})