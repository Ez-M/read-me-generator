// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require('fs')
const inquirer = require('inquirer')
const questions = []


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is your project's title?",
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description explaining the what, why, and how of your project',
            },
            {
                type: 'input',
                name: 'install',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            },
            {
                type: 'input',
                name: 'use',
                message: 'Provide instructions and examples for use.',
            },
            {
                type: 'input',
                name: 'credit',
                message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license would you like to use for this project?',
                choices: ['MIT', 'Boost Software 1.0', 'Apache 2.0', 'Mozilla Public', 'GNU LGPLv3', 'GNU GPLv3', 'GNU AGPLv3']
            },        
        ])

}

// Function call to initialize app
init();


