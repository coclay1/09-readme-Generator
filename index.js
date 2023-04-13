// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please enter a short description.'
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Are there any installation requirements?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is the usage for this app?'
            },
            {
                type: 'list',
                name: 'license',
                message: 'What is the License used?',
                choices: ['MIT', 'Mozilla Public License 2.0', 'The Unlicense']
            },
            {
                type: 'input',
                name: 'contributor',
                message: 'Who contributed?'
            },
            {
                type: 'input',
                name: 'testing',
                message: 'Any additional testing?'
            },
            {
                type: 'input',
                name: 'question',
                message: 'Please enter your github username. i.e (coclay1)'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address. i.e (coc.lay97@gmail.com)'
            }
        ])
        .then((answers => {
            const readmeContent = generateMarkdown(answers);
            fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Success!'))
        }))
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    questions()
}

// Function call to initialize app
init();
