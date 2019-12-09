import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []

// Fetch existing todos from local storage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try{
        todos = todosJSON ? JSON.parse(todosJSON) : [] 
    } catch (e) {
        todos = []
    }
}

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()
}

const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    if (index > -1) {
    todos.splice(index, 1)
    saveTodos()
    }
}

//toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo !== undefined) {
        todo.completed = !todo.completed
        saveTodos()
    }
}


loadTodos()

export { getTodos, createTodo, removeTodo, toggleTodo, loadTodos }