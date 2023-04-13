// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// adds badge based on chosen license
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
// adds link to license
function renderLicenseLink(license) {
  const mitLink = 'https://choosealicense.com/licenses/mit/'
  const mplLink = 'https://choosealicense.com/licenses/mpl-2.0/'
  const unlicenseLink = 'https://choosealicense.com/licenses/unlicense/'
  if(license == 'MIT') {
    return mitLink
  } else if (license == 'Mozilla Public License 2.0') {
    return mplLink
  } else {
    return unlicenseLink
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// generates readme
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](${renderLicenseBadge(data.license)})
  <br />

  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)

  -[Usage](#usage)

  -[Contributors](#contributors)
  
  -[License](#license)

  -[Testing](#testing)

  -[Questions](#questions)

  ## Installation
  This app requires ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  [shields.io](https://shields.io/)
  
  ${data.contributor}

  ## License
  ![badge](${renderLicenseBadge(data.license)})
  <br />
  This app was built using the [${data.license}](${renderLicenseLink(data.license)}) license. Please refer to the [${data.license}](${renderLicenseLink(data.license)}) license.

  ## Testing
  ${data.testing}

  ## Questions
  Please contact me at [github.com/${data.question}](https://github.com/${data.question}) or at [${data.email}](${data.email}) 
  if you have further questions on how to use the app or if you wish to contribute to the project.
`;
}

module.exports = generateMarkdown;

// Readme Generator
// This app uses node.js, inquirer and shields.io
// The user will have to install node.js version 16.0.0+ and inquirer at version 8.2.4.
// This app was built to generate a professional readme. This app will prompt the user with questions that when answered will create a readme.md file with answers provided by the user.  This app will render a badge based on the license chosen with links to said license. This app also has a function table of contents and links on how to contact the user.