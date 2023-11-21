// Adds fs module
const fs = require('fs');
// Adds ability to import functions from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown')


// Initializes the program, running the renderMarkdown function from generateMarkdown.js, then creating README file
async function init() {
  const markdown = await generateMarkdown.renderMarkdown();
  
  // Only runs once the above function is complete
  await writeToFile(markdown);
    
}

// Uses provided data to create new README.md file and append information
const writeToFile = (data) => fs.writeFile('README.md', data, (err) => err ? console.error(err) : 'Done')

// Function call to initialize app
init();
