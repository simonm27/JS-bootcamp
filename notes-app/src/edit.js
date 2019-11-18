import { initialiseEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'
 
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const lastEdited = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initialiseEditPage(noteId)

//Save new note ttile to notes
noteTitle.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value,

    })
    lastEdited.textContent = generateLastEdited(note.updatedAt)
})

noteBody.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    lastEdited.textContent = generateLastEdited(note.updatedAt)
})

removeElement.addEventListener('click', function(e) {
    removeNote(noteId)
    location.assign('/index.html')
})

//Change rendered data if changes made to duplicate browser window
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initialiseEditPage(noteId)
    }
})


