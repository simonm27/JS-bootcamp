'use strict'


let todos = getSavedTodos()

const filter = {
    searchText: '',
    hideCompleted: false
}

//Render todos and summary
renderTodos(todos, filter)

document.querySelector('#search-todos').addEventListener('input', (e) => {
    filter.searchText = e.target.value
    renderTodos(todos, filter)
})

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.addTodo.value,
        completed: false
    })

    saveTodos(todos)

    renderTodos(todos, filter)
    
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filter.hideCompleted = e.target.checked
    renderTodos(todos, filter)
})