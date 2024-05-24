// TODO: Include packages needed for this application
// const inquirer = import("inquirer");
import inquirer from "inquirer";
import fs from "fs";

// const markdownGenerator = require(`./utils/generateMarkdown`)

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of GitHub project?",

        },

        {
            type: "input",
            name: "description",
            message: "What is the description?",

        },

        {
            type: "input",
            name: "table_of_contents",
            message: "What is the table of contents?",
        },

        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?",

        },

        {
            type: "input",
            name: "usage_information",
            message: "What is the usage information?",

        },

        {
            type: "input",
            name: "contribution_guidelines",
            message: "What are the contribution guidelines?",

        },

        {
            type: "input",
            name: "test_instructions",
            message: "What are the testing instructions?",

        },

        {
            type: 'list',
            name: 'license',
            message: 'What license should your project have?',
            choices: ['MIT', 'None'],
        },

        {
            type: "input",
            name: "username",
            message: "What is your username?",

        },

    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    
    ])

        .then((res) => {
            console.log(res);
            const readmeResults = createReadme(res);
            writeToFile(readmeResults);
        });
}
// Create a function to write README file
function writeToFile(response) {
    fs.writeFile('README.md', response, (err) => err ? console.error(err) : console.log('Success!')
    );

}

function createReadme(Answers) {

    return ` # ${Answers.title}
    ## Description
    ${Answers.description}
    ## Table of Contents
    ${Answers.table_of_contents}
    ## Installation
    ${Answers.installation}
    ## Usage
    ${Answers.usage_information}
    ## Contribution
    ${Answers.contribution_guidelines}
    ## Tests
    ${Answers.test_instructions}
    ## Questions
    You can view more of my projects at https://github.com/${Answers.username}.
    Contact me at ${Answers.email}.
    `

};
// Function call to initialize app
init();