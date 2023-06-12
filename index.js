//Import needed libraries
const fs = require("fs");
const inquirer = require("inquirer");
//This allows you to change the output location with one line
const fileLoc = "./output/README.md";
const generateMarkdown = require("./utils/generateMarkdown.js");
//This is the array of licenses that can be taken in,
//copied verbaitm from the github website's pulldown when creating a new repo
const licenseList = [
  "none",
  "Apache License 2.0",
  "Boost Software License 1.0",
  'BSD 2-Clause "Simplified" License',
  'BSD 3-Clause "New" or "Revised" License',
  "Creative Commons Zero v1.0 Universal",
  "Eclipse Public License 2.0",
  "GNU Affero General Public License v3.0",
  "GNU General Public License v2.0",
  "GNU General Public License v3.0",
  "GNU Lesser General Public License v2.1",
  "MIT License",
  "Mozilla Public License 2.0",
  "The Unlicense",
];

//This is the array of questions for the user to enter their info
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
    choices: licenseList,
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
    message: "Please enter your github username for contact info:",
    name: "questionsGithub",
  },
  {
    type: "input",
    message: "Please enter email for contact info:",
    name: "questionsEmail",
  },
];

//I made this to make generating a blank template quick and easy
const blankTemplateWanted = [
  {
    type: "list",
    message:
      "Would you like to generate a blank template file to edit in a separate editor, or enter information directly here?",
    choices: ["Generate Blank Template", "Enter Information Here"],
    name: "blankTemplate",
  },
];

//This actually writes the file to the output
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Writing successful")
  );
}

//This initializes the app and gets the questions rolling
function init() {
  console.log(
    "\n\nWelcome! You are going to be asked a series of questions to build a readme file.\n",
    "To skip any section, simply hit 'enter' without entering any info\n",
    "You may press ctrl+c at any time to exit and discard all changes.\n"
  );
  inquirer.prompt(blankTemplateWanted).then((ans) => {
    if (ans.blankTemplate === "Generate Blank Template") {
      console.log(":Entered blank path");
      let readmeText = generateMarkdown.generateMarkdown("", true);
      writeToFile(fileLoc, readmeText);
    } else {
      inquirer.prompt(questions).then((ans) => {
        let readmeText = generateMarkdown.generateMarkdown(ans, false);
        writeToFile(fileLoc, readmeText);
      });
    }
  });
}

// Function call to initialize app, everything happens from this one line
init();
