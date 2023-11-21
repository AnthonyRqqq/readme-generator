// Adds fs library
const fs = require('fs');
// Adds ability
const generateMarkdown = require('./utils/generateMarkdown')


// Initializes the program
async function init() {
  const markdown = await generateMarkdown.renderMarkdown();
  console.log(markdown)
  await writeToFile(markdown);
    
}

function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => err ? console.error(err) : 'Done')
}

// Function call to initialize app
init();
