

// Bonus: Add a watcher for local storage

import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

//Render todos and summary
renderTodos()

document.querySelector('#search-todos').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos(todos, filter)
})

document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.addTodo.value.trim()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()

    renderTodos()
    
    e.target.elements.addTodo.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

//Change data on duplicate tab / window
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})