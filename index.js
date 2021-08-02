
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title:',
        name: 'title'
    },
    {
        type: 'checkbox',
        message: 'Choose which license you would like to use:',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Descriptions of the project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test instructions:',
        name: 'test'
    },
    {
        type: 'input',
        message: 'GitHub profile:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email'
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            writeToFile('./sample-readme/generateReadme.md', response);
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),
        (err) => err ? console.log(err) : console.log('Success!'));
}

// Function call to initialize app
init();
