// Adds fs library
const fs = require('fs');
// Adds inquirer library
const inquirer = require('inquirer')


inquirer
    // Runs questions for generating readme
  .prompt([
    // Gets title
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },

    // Allows choice of license
    {
        type: 'list',
        message: 'Choose a license.',
        name: 'license',
        choices: [
            'Apache 2.0',
            'GNU General Public v3.0',
            'MIT',
        ]
    },

    // Gets user email
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },

    // Gets user GitHub
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },

    // Gets installation instructions
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'install'
    },

    // Gets project description
    {
        type: 'input',
        message: 'Enter a description of the project.',
        name: 'description',
    },

    // Gets usage information
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'usage',
    },

    // Gets guidlines for contributing to repo
    {
        type: 'input',
        message: 'Enter contribution guidlines.',
        name: 'contribution',
    },

    // Gets instructions for testing project
    {
        type: 'input',
        message: 'Enter instructions for testing the project.',
        name: 'test',
    },
  ])
  .then((response) => {
    console.log(response);
    writeToFile(response);
  })

// Constructs readme file based on user input
function writeToFile(response) {
    // Assembles data into usable form for markdown
    const data = 
    `# ${response.title}
    \n## Table of Contents
    \n[Description](#description)
    \n[Installation](#installation)
    \n[Usage](#usage)
    \n[Contributing](#contributing)
    \n[Tests](#tests)
    \n[Questions](#questions)
    \n## Description
    \n ${response.description}
    \n## Installation
    \n ${response.installation}
    \n## Usage
    \n ${response.usage}
    \n## Contributing
    \n ${response.contribution}
    \n## Tests
    \n ${response.test}
    \n## Questions
    \nGitHub: ${response.github}
    \nEmail: ${response.email}
    `
    
    // Creates README.md file and adds data
    fs.writeFile('README.md', data, (err) => err ? console.error(err) : "");
}

// Initializes the program
function init() {
    writeToFile();
}

// Function call to initialize app
// init();
