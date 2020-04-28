var inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
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
            message: "What is your Table of Contents?",
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
            message: "What is your GitHub username?",
            name: "userGithub"
        },
    ])
    .then(function (response) {
        const userGithub = response.userGithub;
        const userTitle = response.userTitle;
        const userDescription = response.userDescription;
        const userTOC = response.userTOC;
        const userInstallation = response.userInstallation;
        const userUsage = response.userUsage;
        const userLicense = response.userLicense;
        const userContributing = response.userContributing;
        const userTests = response.userTests;

        axios
            .get(`https://api.github.com/users/${userGithub}`)
            .then(function (response) {

                let renderReadME = 
`# Project Title: ${userTitle}  \n
## Project Description:  \n
${userDescription}  \n
## Table of Contents:  \n
${userTOC}  \n
## Installation:  \n
${userInstallation}  \n
## Usage:  \n
${userUsage}  \n
## License:  \n
${userLicense}  \n
## Contributing Users:  \n
${userContributing}  \n
## Tests:  \n
${userTests}  \n
## Questions?  \n
GitHub username: ${userGithub}  \n
GitHub e-mail: ${response.data.email}  \n
![GitHub Profile Pic](${response.data.avatar_url})`;

                writeFileAsync("NEW-README.md", renderReadME).then(err => err ? console.log(err) : console.log("Successfly created new ReadME!"));
    });
});