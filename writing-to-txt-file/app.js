// Includes a required module/library for reading and writing files:
const fs = require('fs');

// Writes to text file:
// fs.writeFileSync('notes.txt', 'My name is Andrew.');

// Appends information to text file:
fs.appendFileSync('notes.txt', ' I live in Philadelphia.');
