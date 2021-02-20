// renderLicenseBadge function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
  `
}

// renderLicenseLink function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  [${license}](https://choosealicense.com/licenses/${license}/)
  `
}

// renderLicenseSection function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)}
  <br />
  This application is covered by the ${renderLicenseLink(license)} license.
  `
}

//generateMarkdown function generates markdown for README
function generateMarkdown(data) {  
  return `# ${data.title}

  ${renderLicenseBadge(data.license)} <br />

  ## Description
    ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub: [${data.username}](https://github.com/${data.username}) <br />
  <br />
  Email me with any questions: ${data.email}
`;
}

module.exports = generateMarkdown;
