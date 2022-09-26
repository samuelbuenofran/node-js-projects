const fs = require('fs');
// // convert to a string

// This one is for converting objects into strings using the JSON object
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// This line of code will read the contents of the json file and store them into dataBuffer
const dataBuffer = fs.readFileSync('1-json-ch.json');

// This will transform the data in dataBuffer into string datatype
const dataJSON = dataBuffer.toString();
console.log('\n' + dataJSON);

// This will parse the string datatype to JSON format
const data = JSON.parse(dataJSON);
console.log('\n' + data);

data.name = 'Samuel';
data.planet = 'Mars';
data.age = '25';

const newData = JSON.stringify(data);

fs.writeFileSync('1-json-ch.json', newData);

// console.log(data.title);

//fs.writeFileSync('1-json.json', JSON.stringify(data));
