// Sets license badge, returns empty string if no license selected
function renderLicenseBadge(license) {
  let badge = ''
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;

    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
      break;

    case 'GNU General Public v3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      break;

    default: ''
  }
}

// Sets license link, returns empty string if no license selected
function renderLicenseLink(license) {
  let licenseLink = '';
  switch (license) {
    case 'MIT':
      licenseLink = '(https://opensource.org/licenses/MIT)'
      break;
    
    case 'Apache 2.0':
      licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
      break;

    case 'GNU General Public v3.0':
      licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)'
      break;

    default: ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
