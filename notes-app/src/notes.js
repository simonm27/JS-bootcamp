import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

//Check and load existing saved data from locat storage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON !== null ? JSON.parse(notesJSON) : []
    } catch(e) {
        return []
    }
}

const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Expose nites from module
const getNotes = () => notes

const createNote = () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes()
}


notes = loadNotes()

export { getNotes, createNote }