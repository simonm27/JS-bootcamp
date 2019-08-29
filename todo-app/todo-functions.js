
//Retrieve todos from local storage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
        if (todosJSON !== null) {
            return JSON.parse(todosJSON)
        } else {
            return []
        }
}

//Save todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render todos and summary. Filter todos based on search
const renderTodos = (todos, filter) => {
    const filteredTodos = todos.filter((todo) => {                     //.filter array method returns an array
        const searchTextMatch = todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        const hideCompletedMatch = !filter.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    //Calculate number of incomplete todos
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)         //filtering on the filtered todos array
        

    document.querySelector('#app').innerHTML = ''

    document.querySelector('#app').appendChild(generateSummaryDOM(incompleteTodos))
    

    filteredTodos.forEach(function(todo) {
        
        document.querySelector('#app').appendChild(generateTodoDOM(todo))
    })
}

//remove a todo by id
const removeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    if (index > -1) {
    todos.splice(index, 1)
    }
}

//toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
    
}

//Generate todo DOM
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('div')
    const textElement = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    //remove button
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed

    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filter)
    })

    button.textContent = 'x'
    button.addEventListener('click', (e) => {
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
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}