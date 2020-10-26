const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  {
    name: 'github',
    message: 'GitHub Name:'
  },
  {
    name: 'email',
    message: 'Email Address:'
  },
  {
    name: 'title',
    message: 'Project Title:'
  },
  {
    name: 'description',
    message: 'Project Description:'
  },
  {
    name: 'install',
    message: 'Installation Procedure:'
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Usage Instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: [
      {
        name: 'Apache License 2.0',
        value: 'apache'
      },
      {
        name: 'GNU General Public License v3.0',
        value: 'gpl3'
      },
      {
        name: 'MIT License',
        value: 'mit'
      }
    ]
  },
  {
    name: 'contributing',
    message: 'Contributing Instructions:'
  },
  {
    name: 'tests',
    message: 'Testing Instructions:'
  }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function main() {
  let data = await inquirer.prompt(questions);
  console.log(data);
}

// function call to initialize program
main();
