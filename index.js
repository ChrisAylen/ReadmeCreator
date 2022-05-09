const inquirer = require('inquirer');

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
        name: 'Installation',
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
        message: 'Please provide your contibution guidelines.',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for the project?',
    },
    {
        type: 'list',
        name: 'licence',
        message: 'What licence do you want to use?',
        choices: ['MIT', 'GPL', 'BSD']
    }
]).then(function(response) {
    console.log(response);
})



//Generate the README.md file

