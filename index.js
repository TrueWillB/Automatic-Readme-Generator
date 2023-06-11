// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const fileLoc = "./output/README.md";
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", message: "What is the title of this app?", name: "title" },
  {
    type: "list",
    message: "Would you like a table of contents?",
    name: "toc",
    choices: ["Yes", "No"],
  },
  {
    type: "input",
    message: "Please write a description of this app:",
    name: "description",
  },
  {
    type: "input",
    message: "Please give any installation instructions for this app:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please give any information on usage of this app:",
    name: "usage",
  },
  {
    type: "list",
    message: "Please choose the license for this app:",
    name: "license",
    choices: ["MIT", "Flink", "DoinkLicense"],
  },
  {
    type: "input",
    message: "Please give contribution guidlines to this app:",
    name: "guidlines",
  },
  {
    type: "input",
    message: "Please give information on tests:",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter github username for contact info:",
    name: "questionsGithub",
  },
  {
    type: "input",
    message: "Please enter email for contact info:",
    name: "questionsEmail",
  },
];

/*Need to get:
Title (might be done with repository creation already)
Description
Table of contents
installation
usage
license
contributing (??)
tests
questions
*/

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Writing successful")
  );
}

// TODO: Create a function to initialize app
function init() {
  console.log(
    "\n\nWelcome! You are going to be asked a series of questions to build a readme file.\n",
    "To skip any section, simply hit 'enter' without entering any info\n",
    "You may press ctrl+c at any time to exit and discard all changes.\n"
  );
  inquirer.prompt(questions).then((ans) => {
    let readmeText = generateMarkdown.generateMarkdown(ans);
    writeToFile("./output/README.md", readmeText);
  });
}

// Function call to initialize app
init();
