
import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

//Render todos and summary. Filter todos based on search
const renderTodos = () => {
    const filteredTodos = getTodos().filter((todo) => {   //.filter array method returns an array
        const filter = getFilters()                  
        const searchTextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCompletedMatch = !filter.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    //Calculate number of incomplete todos
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)         //filtering on the filtered todos array
    const app = document.querySelector('#app')

    app.innerHTML = ''

    app.appendChild(generateSummaryDOM(incompleteTodos))
    
    if (filteredTodos.length > 0) {
        filteredTodos.forEach(function(todo) {
        app.appendChild(generateTodoDOM(todo))
        })
        } else {
            const message = document.createElement('p')
            message.classList.add('empty-message')
            message.textContent = 'No to-dos to show'
            app.appendChild(message)
        }

}

//Generate todo DOM
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('label')
    const containerElement = document.createElement('div')
    const textElement = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    //remove button
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed

    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        renderTodos()
    })

    //Setup Container
    todoElement.classList.add('list-item')
    containerElement.classList.add('list-item__container')
    todoElement.appendChild(containerElement)

    button.textContent = 'remove'
    button.classList.add('button', 'button--text')
    button.addEventListener('click', (e) => {
        removeTodo(todo.id)
        renderTodos()
    })

    containerElement.appendChild(checkbox)

    textElement.textContent = todo.text

    containerElement.appendChild(textElement)
    todoElement.appendChild(button)

    return todoElement
}

//Generate the todo summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    let plural = incompleteTodos.length === 1 ? '' : 's'

    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}

export { generateTodoDOM, renderTodos, generateSummaryDOM }
