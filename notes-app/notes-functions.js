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
    const textElement = document.createElement('a')
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
        if (note.title.length > 0) {
            textElement.textContent = note.title
        } else {
            textElement.textContent = 'Unnamed note'
        }


    textElement.setAttribute('href', `/edit.html#${note.id}`)

    noteElement.appendChild(textElement)
    return noteElement
}

//Sort notes by one of three ways
const sortNotes = function(notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function(a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (b.updatedAt > a.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    }   else if (sortBy === 'byCreated') {
            return notes.sort(function(a, b) {
                if (a.createdAt > b.createdAt) {
                    return -1
                } else if (b.createdAt > a.createdAt) {
                    return 1
                } else {
                    return 0
                }
            })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function(a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }  
        })
    }   else {
        return notes
    }
}

// Render application notes
const renderNotes = function(notes, filters) {
    notes = sortNotes(notes, filters.sortBy)
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

//generate the last edited message
const generateLastEdited = function(timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}