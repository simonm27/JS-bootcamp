const todos = [{
    text: 'Cut the lawn',
    completed: true
}, {
    text: 'Feed the cat',
    completed: false
}, {
    text: 'Wash the car',
    completed: true
}, {
    text: 'Learn javascript',
    completed: false
}, {
    text: 'Cook tea',
    completed: true
}
]

//Calculate number of incomplete todos
const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

//Render number of incomplete todos
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

//List todos
todos.forEach(function(todo) {
        let p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('body').appendChild(p)
})

//Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log('I was clicked')
})

// Listen for new todo text change
document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value)
})