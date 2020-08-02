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
    handler: function(argv) {
       notesUtil.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: function() {
        console.log('Listing all the notes')
    }
})

//create read command
yargs.command({
    command: 'read', 
    describe: 'Reading the notes',
    handler: function() {
        console.log('Reading the notes')
    }
})


yargs.parse()


