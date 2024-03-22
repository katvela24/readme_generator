// TODO: Include packages needed for this application
// const inquirer = import("inquirer");
import inquirer from "inquirer";
// const fs = require("inquirer");
// const markdownGenerator = require(`./utils/generateMarkdown`)

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
        message: "What are the test instructions",
        
      }
    ])
    .then((response) =>
      console.log(response)
    );


}
// Function call to initialize app
init();