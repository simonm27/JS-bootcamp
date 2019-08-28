
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const lastEdited = document.querySelector('#last-edited')
const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note) {
    return note.id === noteID
})

if (note === undefined) {
    location.assign('/index.html')
}

noteTitle.value = note.title
noteBody.value = note.body
lastEdited.textContent = generateLastEdited(note.updatedAt)



//Save new note ttile to notes
noteTitle.addEventListener('input', function(e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

noteBody.addEventListener('input', function(e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastEdited.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', function(e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

//Change rendered data if changes made to duplicate browser window
window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note) {
            return note.id === noteID
        })
        
        if (note === undefined) {
            location.assign('/index.html')
        }
        
        noteTitle.value = note.title
        noteBody.value = note.body
        lastEdited.textContent = generateLastEdited(note.updatedAt)
    }
})


