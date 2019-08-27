
//Retrieve todos from local storage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')
        if (todosJSON !== null) {
            return JSON.parse(todosJSON)
        } else {
            return []
        }
}

//Save todos to local storage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render todos and summary. Filter todos based on search
const renderTodos = function(todos, filter) {
    const filteredTodos = todos.filter(function(todo) {                     //.filter array method returns an array
        const searchTextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCompletedMatch = !filter.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    //Calculate number of incomplete todos
    const incompleteTodos = filteredTodos.filter(function(todo) {           //filtering on the filtered todos array
        return !todo.completed
    })

    document.querySelector('#app').innerHTML = ''

    document.querySelector('#app').appendChild(generateSummaryDOM(incompleteTodos))
    

    filteredTodos.forEach(function(todo) {
        
        document.querySelector('#app').appendChild(generateTodoDOM(todo))
    })
}

//remove a todo by id
const removeTodo = function(id) {
    const index = todos.findIndex(function(todo) {
        return todo.id === id
    })
    if (index > -1) {
    todos.splice(index, 1)
    }
}

//Generate todo DOM
const generateTodoDOM = function(todo) {
    const todoElement = document.createElement('div')
    const textElement = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    //remove button
    checkbox.setAttribute('type', 'checkbox')
    button.textContent = 'x'
    button.addEventListener('click', function(e) {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filter)
    })

    todoElement.appendChild(checkbox)

    textElement.textContent = todo.text

    todoElement.appendChild(textElement)
    todoElement.appendChild(button)

    return todoElement
}

//Generate the todo summary
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}