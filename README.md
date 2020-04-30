# ReadMe-Generator  
Description: ReadMe-Generator is a command line application using node.js and inquirer to  
quickly create a NEW-README.md file for your GitHub projects (requires GitHub username).  
Initialize the application with the code below, with prompts for user input for each section.

```sh
node index.js
```
Prompts:  
* Project title  
* Description  
* Table of Contents  
* Installation  
* Usage  
* License  
* Contributing  
* Tests  
* Questions?   
  * User GitHub username  
  * User GitHub email
  * User GitHub profile picture   

User Story:  
GIVEN the developer has a GitHub profile and a repository  

WHEN prompted for the developer's GitHub username and repo specific information  

THEN a README for the repo is generated  

# Latest commit:  
-Removed project requirements  
-Installed two new dependencies, badge-maker and camelcase  
-Required in badge-maker for creating License badge   
-Added shields.io functionality to create badge  

# Previous commits:  
-Deconstructed response vars  
-Modified questions and NEW-README.md template  
-Updated project README.md   
-Added error handlers for null Github API responses  
-Resized markdown profile pic  
-Added/required in "outdent" npm dependency for removing whitespace when using template literals   
-Added axios npm as dependency  
-Required in axios with GET call to GitHub API  
-Added API profile pic and email to new ReadME  
-Added Inquirer prompts for the user questions and wrote file with user answers  
-Created package.json with inquirer dependency  
-Installed iniquirer  