const notes = [{
    title: 'my next trip',
    body: 'I would like to go to the Canary Islands'
}, {
    title: 'Habits to work on',
    body: 'Exercise'
}, {
    title: 'Office modifications',
    body: 'Get a desk'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) 
    })

    document.querySelector('#app').innerHTML = '<p>Test</p>'

    filteredNotes.forEach(function(note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#app').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-notes').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})