const chalk = require('chalk')
const yargs = require('yargs')
const notesUtil = require('./notes.js')

//customize yargs
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
       notesUtil.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler() {
       const notes = notesUtil.loadNotes()
       console.log(chalk.blue.inverse('Your notes: '))
       notes.forEach((note) => {
           console.log(note.title)
       })
    }
})

//create read command
yargs.command({
    command: 'read', 
    describe: 'Reading the notes',
    builder: {
        Title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.readNote(argv.title)
    }
})


yargs.parse()


