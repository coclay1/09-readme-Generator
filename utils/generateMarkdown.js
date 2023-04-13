// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = `https://img.shields.io/badge/License-${license}-`
  const orange = `orange`
  const brightGreen = `brightgreen`
  const blue = `blue`
  if(license == 'MIT') {
    return badge + orange
  } else if (license == 'Mozilla Public License 2.0') {
    return badge + brightGreen
  } else {
    return badge + blue
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributors](#Contributors)
  -[License](#License)
  -[Testing](#Testing)
  -[Questions](Questions)
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributor}

  ## License
  ![badge](${renderLicenseBadge()})
  <br />
  This app was built using the ${data.license} license. Please refer to the ${data.license} license.

  ## Testing
  ${data.testing}

  ## Questions
  Please contact me at [${data.question}](https://github.com/${data.question}) or at [${data.email}](${data.email}) 
  if you have further questions on how to use the app or if you wish to contribute to the project.
`;
}

module.exports = generateMarkdown;
