const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const outdent = require('outdent');
const { makeBadge } = require('badge-maker')
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "userGithub"
        },
        {
            type: "input",
            message: "What is your e-mail?",
            name: "userEmail"
        },
        {
            type: "input",
            message: "What is your Project's Title?",
            name: "userTitle"
        },
        {
            type: "input",
            message: "Please write a short description of your project",
            name: "userDescription"
        },
        {
            type: "input",
            message: "What are your installation requirements and instructions?",
            name: "userInstallation"
        },
        {
            type: "input",
            message: "What are your usage instructions?",
            name: "userUsage"
        },
        {
            type: "list",
            message: "What is your License information?",
            choices: ["MIT", "APACHE", "GPL 3.0", "BSD 3", "None"],
            name: "userLicense"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "userContributing"
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "userTests"
        },
    ])
    .then(response => {

        // Deconstructed response variables
        const { userGithub,
            userEmail,
            userTitle,
            userDescription,
            userInstallation,
            userUsage,
            userLicense,
            userContributing,
            userTests 
        } = response;

        // Shields.IO badge creator
        const format = {
            label: 'license',
            message: `${userLicense}`,
            color: 'blue',
        }

        // Create new badge function 
        const badge = makeBadge(format)

        // Axios GET to GitHub for profile pic
        axios
            .get(`https://api.github.com/users/${userGithub}`)
            .then(response => {
                let userPicture = "";
                response.data.avatar_url === null ? userPicture = "No profile pic found" : userPicture = response.data.avatar_url;

                let renderReadME = outdent`
                    # ${userTitle}  \n
                    ## Project Description:  \n
                    ${userDescription}  \n
                    ## Table of Contents:  \n
                    * [Installation](##Installation)  \n
                    * [Usage](##Usage)  \n
                    * [License](##License)  \n
                    * [Contributing](##Contributing) \n
                    * [Tests](##Tests)  \n
                    * [Questions](##Questions?)  \n
                    ## Installation:  \n
                    ${userInstallation}  \n
                    ## Usage:  \n
                    ${userUsage}  \n
                    ## License:  \n
                    ${badge}  \n
                    ## Contributing:  \n
                    ${userContributing}  \n
                    ## Tests:  \n
                    ${userTests}  \n
                    ## Questions?  \n
                    GitHub username: ${userGithub} \n
                    GitHub e-mail: ${userEmail} \n
                    ![GitHub Profile Pic](${userPicture}&s=100)`;

                writeFileAsync("NEW-README.md", renderReadME).then(err => err ? console.log(err) : console.log("Successfly created NEW-README.md!"));
            });
    });