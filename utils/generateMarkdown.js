// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function constructTOC(data) {
  console.log("building TOC");
  var tocOutput = "\n## TOC goes right here\n";
  return tocOutput;
}
function generateMarkdown(data) {
  console.log(data);

  //TODO REWORK CODE TO WRITE ENTIRE FILE ALL IN ONE GO, DO NOT USE APPENDS============================================
  //I purposely made the text of the readme in this strange appending fashion so that I can come back and individually change each section later if I so desire.
  //I am aware that the code would be cleaner if I simply constructed all the text in one swoop with template literals
  var readmeText = "";
  readmeText += `# ${data.title}\n`; //Add title
  if (data.toc == "Yes") {
    readmeText += constructTOC(data);
  }
  readmeText += `\n## Description\n${data.description}\n`;
  readmeText += `\n## Installation\n${data.installation}\n`;
  readmeText += `\n## Usage\n${data.usage}\n`;

  return readmeText;

  //   return `# ${data.title}

  // `;
}

module.exports = { generateMarkdown };
