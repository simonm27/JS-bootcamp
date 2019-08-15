const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.pop()
// notes.push('My new note')
// console.log(notes.shift())
// notes.unshift('My first Note')

//notes.splice(1, 1, 'Spliced note')

notes[2] = 'This is now the new note 3'

notes.forEach(function(note, index) {
    console.log(index)
    console.log(note)
})

console.log(notes)
console.log(notes.length)
