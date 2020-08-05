const fs = require('fs')
const chalk = require('chalk')


const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if (noteToRead) {
    console.log(chalk.green.inverse(noteToRead.title +': '))
    console.log(noteToRead.body)

    } else {
        console.log(chalk.red.inverse('Note title not found!'))
    }
}

const addNote = (title, body) => {
     const notes = loadNotes()
     //const duplicateNotes = notes.filter((notes) => notes.title === title)
     const duplicateNote = notes.find((notes) => notes.title === title)

     if (!duplicateNote) {
         
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    console.log(chalk.greenBright.bold('New note added!'))

     } else {
         console.log(chalk.red.inverse('Note title taken!'))
         
     }
    }   

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title !== title)

    if (notes.length > notesToKeep.length) {

        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)

    } else{

        console.log(chalk.red.inverse('Note was not found!'))
    }

    saveNotes(notesToKeep)

}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } 

    catch(e) {
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes,
    readNote: readNote
}