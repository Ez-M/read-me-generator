// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require('fs')
const inquirer = require('inquirer')
const questions = []


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    console.log (data.license, data.title, data.use)

    const { title, description, install, use, credit, contribute, tests, license, github, email} = data

    switch (license) {
        case 'MIT':
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            licenseCopy =' '
            break;
        case 'Boost Software 1.0':
            badge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            licenseCopy =' '
            break; 
        case 'Apache 2.0':
            badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            licenseCopy =' '
            break;
        case  'Mozilla Public':
            badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            licenseCopy =' '
            break;
        case 'GNU LGPLv3':
            badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
            licenseCopy =' '
            break;
        case 'GNU GPLv3':
            badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            licenseCopy =' '
            break;
        case 'GNU AGPLv3':
            badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
            licenseCopy =' '
            break;
    }

    const html = 
    `#${title}                      ${badge}

    ## Description
    ${description}
    
    ## Installation Instructions
    ${install}
    
    ## Usage Information
    ${use}

    ## Credits
    ${credit}
    
    ## How to Contribute
    ${contribute}
    
    ## Test Instructions
    ${tests}

    ## Test Instructions
    For further questions regarding this project, you can find my github at ${github} 
    or email directly at ${email}

    ## License
    ${licenseCopy}`

    fs.writeFile(fileName, html, (err) =>
    err ? console.log(err) : console.log('Success!')
);
}


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
                type: 'input',
                name: 'email',
                message: 'What is your email? (So people may contact you with questions)',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github url? (so people may contact you with questions)',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license would you like to use for this project?',
                choices: ['MIT', 'Boost Software 1.0', 'Apache 2.0', 'Mozilla Public', 'GNU LGPLv3', 'GNU GPLv3', 'GNU AGPLv3']
            },
            {
                type: 'input',
                name: 'name',
                message: "Please enter your full name (for licensing)",
            },
            {
                type: 'input',
                name: 'date',
                message: "Please enter today's date (for licensing)",
            },
        ])

        .then((data) => {
            const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
            writeToFile(fileName, data)
        });

}

// Function call to initialize app
init();


