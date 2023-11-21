// Adds fs library
const fs = require('fs');
// Adds inquirer library
const inquirer = require('inquirer')
// Adds ability
const generateMarkdown = require('./utils/generateMarkdown')


// Initializes the program
function init() {
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
    console.log(response.license)
    const licenseSection = generateMarkdown.renderLicenseSection(response.license);
    const licenseLink = generateMarkdown.renderLicenseLink(response.license);
    const badge = generateMarkdown.renderLicenseBadge(response.license);
    console.log(badge);
    const data =
    `# ${response.title}
    \n${badge}
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
    \n ${response.install}
    \n## Usage
    \n ${response.usage}
    \n${licenseSection}
    \n${licenseLink}
    \n## Contributing
    \n ${response.contribution}
    \n## Tests
    \n ${response.test}
    \n## Questions
    \nGitHub: ${response.github}
    \nEmail: ${response.email}
    `
    writeToFile(data);

  })
}

function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => err ? console.error(err) : 'Done')
}

// Function call to initialize app
init();
