var inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Project Title?",
            name: "userTitle"
        },
        {
            type: "input",
            message: "What is your Project Description?",
            name: "userDescription"
        },
        {
            type: "input",
            message: "What is your Table of Contents",
            name: "userTOC"
        },
        {
            type: "input",
            message: "What are your installation instructions?",
            name: "userInstallation"
        },
        {
            type: "input",
            message: "What are your usage instructions?",
            name: "userUsage"
        },
        {
            type: "input",
            message: "What is your License information?",
            name: "userLicense"
        },
        {
            type: "input",
            message: "Contributing users?",
            name: "userContributing"
        },
        {
            type: "input",
            message: "What is your Tests?",
            name: "userTests"
        },
        {
            type: "input",
            message: "What is your Questions?",
            name: "userQuestions"
        },
        {
            type: "input",
            message: "What is your GitHub profile name?",
            name: "userGithub"
        },
    ])
    .then(function (response) {
        console.log(response);

        let renderReadME = 
`# Project Title:  \n
${response.userTitle}  \n
## Project Description:  \n
${response.userDescription}  \n
## Table of Contents:  \n
${response.userTOC}  \n
## Installation:  \n
${response.userInstallation}  \n
## Usage:  \n
${response.userUsage}  \n
## License:  \n
${response.userLicense}  \n
## Contributing:  \n
${response.userContributing}  \n
## Tests:  \n
${response.userTests}  \n
## Questions:  \n
${response.userQuestions}  \n
## GitHub username:  \n
${response.userGithub}`;

        writeFileAsync("NEW-README.md", renderReadME).then(err => err ? console.log(err) : console.log("Successfly created new ReadME!"));

    });