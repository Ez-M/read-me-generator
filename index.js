
const fs = require('fs')
const inquirer = require('inquirer')



//writeToFile parses user data and creates
function writeToFile(fileName, data) { 
    console.log (data.license, data.title, data.use)

    const { title, description, install, use, credit, contribute, tests, license, github, email, name, date} = data

    switch (license) {
        case 'MIT':
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            licenseCopy =` Copyright ${date}  ${name}

            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the 
            Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
             and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
            ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
            THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `
            break;
        case 'Boost Software 1.0':
            badge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            licenseCopy =` Boost Software License - Version 1.0 - August 17th, 2003

            Permission is hereby granted, free of charge, to any person or organization
            obtaining a copy of the software and accompanying documentation covered by
            this license (the "Software") to use, reproduce, display, distribute,
            execute, and transmit the Software, and to prepare derivative works of the
            Software, and to permit third-parties to whom the Software is furnished to
            do so, all subject to the following:
            
            The copyright notices in the Software and this entire statement, including
            the above license grant, this restriction and the following disclaimer,
            must be included in all copies of the Software, in whole or in part, and
            all derivative works of the Software, unless such copies or derivative
            works are solely in the form of machine-executable object code generated by
            a source language processor.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
            SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
            FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
            DEALINGS IN THE SOFTWARE. `
            break; 
        case 'Apache 2.0':
            badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            licenseCopy =`    Copyright ${date} ${name}

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
         
              http://www.apache.org/licenses/LICENSE-2.0
         
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License. `
            break;
        case  'Mozilla Public':
            badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            licenseCopy =' This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/ '
            break;
        case 'GNU LGPLv3':
            badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
            licenseCopy =` Copyright (C) ${date}  ${name}

            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU Lesser General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
        
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU Lesser General Public License for more details. See https://www.gnu.org/licenses/`
            break;
        case 'GNU GPLv3':
            badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            licenseCopy =` Copyright (C) ${date}  ${name}

            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
        
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details. See https://www.gnu.org/licenses/`
            break;
        case 'GNU AGPLv3':
            badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
            licenseCopy =`     Copyright (C) ${date}  ${name}

            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU Affero General Public License as published
            by the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
        
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU Affero General Public License for more details. See https://www.gnu.org/licenses/ `
            break;
    }
// sets all README html 
    const html = 
    `#${title}                      ${badge}

    ## Table of Contents 

* [Description](##Description)

* [Installation](##Installation)

* [Usage](##Usage Information)

* [Credits](##Credits)

* [Contribute](##Contribute)

* [Tests](##Tests)

* [Contact](##Contact)

* [License](##License)

    ## Description
    ${description}
    
    ## Installation
    ${install}
    
    ## Usage Information
    ${use}

    ## Credits
    ${credit}
    
    ## Contribute
    ${contribute}
    
    ## Tests
    ${tests}

    ## Contact
    For further questions regarding this project, you can find my github at https://github.com/${github}/ 
    or email directly at ${email}

    ## License
    ${licenseCopy}`

    fs.writeFile(fileName, html, (err) =>
    err ? console.log(err) : console.log('Success!')
);
}


// inquirer prompts for gathering user input
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
                message: 'What is your github username? (so people may contact you with questions)',
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
// .then creates fileName and passes fileName data to writeToFile function 
        .then((data) => {
            const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
            writeToFile(fileName, data)
        });

}

// Function call to initialize app
init();


