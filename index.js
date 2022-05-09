const { fstat } = require('fs');
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'What licence do you want to use?',
        choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'MPL', 'APACHE', 'THE UNLICNECE', 'BSL', 'BSD']
    }
]).then(function (response) {
    //console.log(response);
    let screenshot = ''

    if (response.screenshot !== 'assets/images/') {
        screenshot =
`###Screenshot
        
![alt ${response.screenshot}](assets/images/${response.screenshot})`
    }

    const theReadMeText = `
    
# ${response.title}
    
## Description
    
${response.description}

## Installation
    
${response.installation}
    
## Usage
    
${response.usage}
    
${screenshot}
    
## Credits

${response.credits}
    
## License
    
${response.licence}
    
    
## How to Contribute
    
${response.contributing}

## Tests
    
${response.tests}
    
`
    console.log(theReadMeText);

    fs.writeFile('README.md', theReadMeText, function (err) {
        console.log(err);
    })



})



