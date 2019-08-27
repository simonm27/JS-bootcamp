console.log(uuidv4())


//Check and load existing saved data from locat storage
const getSavedNotes = function() {
const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//remove a note from the list
const removeNote = function(id) {
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}


//Generate the DOM structure for a note
const generateNoteDOM = function(note) {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('span')
    const button = document.createElement('button')

    //setup the remove note button
    button.textContent = 'Delete'
    noteElement.appendChild(button)
    button.addEventListener('click', function(e) {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //setup the note title text
        if (note.title > 0) {
            textElement.textContent = note.title
        } else {
            textElement.textContent = 'Unnamed note'
        }

    noteElement.appendChild(textElement)
    return noteElement
}

// Render application notes
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) 
    })

    document.querySelector('#app').innerHTML = ''

    filteredNotes.forEach(function(note) {
        const noteElement = generateNoteDOM(note)
        
        document.querySelector('#app').appendChild(noteElement)
    })
}

const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}