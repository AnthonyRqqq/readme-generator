// TODO: Include packages needed for this application
console.log`${process.argv}`

// Adds fs library
const fs = require('fs');
// Adds inquirer library
const inquirer = require('inquirer')

console.log(fs)
console.log(inquirer)

// TODO: Create an array of questions for user input
const questions = [
    "question one",
    "question two"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    questions.forEach(question => console.log(question))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
