const { fstat } = require('fs');
const inquirer = require('inquirer');
const fs = require('fs');
let gitHub="";

inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions.',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide your contibution guidelines (e.g. https://www.contributor-covenant.org/).',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for the project?',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Is there anyone you would like to credit?',
    },

    {
        type: 'input',
        name: 'screenshot',
        default: 'assets/images/',
        message: 'enter the name of the screenshot file (it will be added to the default relative path assets/images/).',
    },

    {
        type: 'list',
        name: 'licence',
        message: 'What licence do you want to use (default is THE UNLICENCE)?',
        default: 'THE UNLICNECE',
        choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'MPL', 'APACHE', 'THE UNLICNECE', 'BSL', 'BSD']
    }
]).then(function (response) {
  
    let screenshot = ''

    if (response.screenshot !== 'assets/images/') {
        screenshot =
            `### Screenshot
        
![alt ${response.screenshot}](assets/images/${response.screenshot})`
    }
if(response.gitHub!==''){

    const gitHubUrl=encodeURI(`https://github.com/`);
    gitHub = `[More of my work can be found here](${gitHubUrl}${response.github})`

}
    const badgeBaseUrl = encodeURI('https://img.shields.io/badge/license-' + response.licence + '-blue.svg');
    const licenceBadge = `![${response.description}](${badgeBaseUrl})`;
    

    const theReadMeText = `
    
# ${response.title}

${licenceBadge}
    
## Description
    
${response.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
    
${response.installation}
    
## Usage
    
${response.usage}
    
${screenshot}
    
## Credits

${response.credits}
    
## License
    
This project is licenced under ${response.licence}
    
    
## Contributing
    
${response.contributing}

## Tests
    
${response.tests}

## Questions

${gitHub}
    
`
    console.log(theReadMeText);

    fs.writeFile('README.md', theReadMeText, function (err) {
    console.log(err);
    })



})



