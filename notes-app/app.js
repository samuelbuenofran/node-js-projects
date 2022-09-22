const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes.js');

// Customise yargs version
yargs.version('1.1.0')

// Create add command
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
            type: 'string'
        }
    },
    // start of the handler function of the add command
    handler: function (argv) {
        console.log('Title: ' + argv.title + '\nBody: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// List command
yargs.command({
    command: 'list',
    description: 'List notes',
    handler: function () {
        console.log('Listing notes...')
    }
})

// Read command
yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function () {
        console.log('Reading note X...')
    }
})

// add, remove, read, list
yargs.parse()
//console.log(yargs.argv)
