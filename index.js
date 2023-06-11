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
    choices: ["MIT, Flink", "DoinkLicense"],
  },
  //   ["Please give guidlines contribution to this app:", name: "contributing"],
  //   ["Please give information on tests:", name: "tests"],
  //   ["Please enter github profile", name: "questionsGithub"],
  //   ["Please enter email for questions:", name: "questionsEmail"],
];

var answers;

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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  var promptArray = []; //This will be given to inquirer.prompt
  answers = []; //initialize array
  console.log(
    "\n\nWelcome! You are going to be asked a series of questions to build a readme file.\n",
    "To skip any section, simply hit 'enter' without entering any info\n",
    "You may press ctrl+c at any time to exit and discard all changes.\n"
  );
  inquirer.prompt(questions).then((ans) => {
    let readmeText = generateMarkdown.generateMarkdown(ans);
    fs.writeFile("./output/README.md", readmeText, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
  //   console.log("blorp");
}

// Function call to initialize app
init();
