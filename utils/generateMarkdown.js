
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
  return badge;
}


// Creates license section, returns empty string if no license selected
function renderLicenseSection(license) {
  let licenseSection = license;
  if (license !== '') {
    licenseSection =
      `\n## License`
  }
  return licenseSection;
};

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

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
