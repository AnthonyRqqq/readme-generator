
// Adds inquirer module
const inquirer = require('inquirer');

// Sets license badge, returns empty string if no license selected
function renderLicenseBadge(license) {
  let badge = ''
  switch (license) {
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;

    case 'Apache 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      break;

    case 'GNU General Public v3.0':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
      break;

    default: ''
  }
  return badge;
  
}


// Creates license section, returns empty string if no license selected
function renderLicenseSection(license) {
  let licenseSection = license;
  if (license !== '') {
    licenseSection = `\n## License`;
  }
  return licenseSection;
};

// Creates link to license section in table of contents, returns empty string if no license selected
function renderLicenseTable(license) {
  let licenseTable = license;
  if (license !== '') {
    licenseTable = `[License](#license)`;
  }
  return licenseTable;
}

// Sets license link, returns empty string if no license selected
function renderLicenseLink(license) {
  let licenseLink = '';
  switch (license) {
    case 'MIT':
      licenseLink = '[MIT](https://opensource.org/licenses/MIT)'
      break;

    case 'Apache 2.0':
      licenseLink = '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
      break;

    case 'GNU General Public v3.0':
      licenseLink = '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
      break;

    default: ''
  }
  return licenseLink;
}

// Generates markdown to be exported and written as readme in index.js
function renderMarkdown() {
  return inquirer
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
    const licenseSection = renderLicenseSection(response.license);
    const licenseLink = renderLicenseLink(response.license);
    const badge = renderLicenseBadge(response.license);
    const licenseTable = renderLicenseTable(response.license);
    console.log(badge);
    const data =
    `# ${response.title}
    \n${badge}
    \n## Table of Contents
    \n[Description](#description)
    \n[Installation](#installation)
    \n[Usage](#usage)
    \n${licenseTable}
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
    return data;
  })
}
module.exports = {
  renderMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
