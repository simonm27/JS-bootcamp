
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

const sortByCompleted = function(todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const removeTodo = function(list, text) {
    const index = list.findIndex(function(todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    }) 
    if (index > -1) {
    list.splice(index, 1)
    } else {
        return console.log(`Todo not found`)
    }
}

const getThingsToDo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })
}

// console.log(getThingsToDo(todos))

// removeTodo(todos, 'Feed the cat')
// console.log(todos)

sortByCompleted(todos)
console.log(todos)