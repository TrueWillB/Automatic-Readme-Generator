// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//An ugly ugly switch statement, but very understandable. It just takes the license choice of the user and returns the badge formatting
function renderLicenseBadge(license) {
  switch (license) {
    case "none":
      return "";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case 'BSD 2-Clause "Simplified" License':
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU Affero General Public License v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU General Public License v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU Lesser General Public License v2.1":
      return "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "https://www.google.com";
}

// If there is no license, return an empty string
//Prettier extension was really making this section unreadable
function renderLicenseSection(license) {
  var licenseText;
  licenseText = `\n## License\n This repo and all of its contents operate under ${license}. For details, please view the LICENSE file in the repository or click the badge: ${renderLicenseBadge(
    license
  )}`;
  return licenseText;
}

//This section dynamically generates the TOC from whatever sections the user included
function constructTOC(data) {
  console.log("building TOC");
  var tocOutput = "";
  for (const section of data) {
    tocOutput += `- [${section}](#${section.toLowerCase()})\n`;
  }
  return tocOutput;
}

//TODO build function that completes github profile url based on name passed to it
function getGithubProfileURL(profile) {
  return profile;
}
function generateMarkdown(data, blankTemplate) {
  console.log(data);

  //TODO REWORK CODE TO WRITE ENTIRE FILE ALL IN ONE GO, DO NOT USE APPENDS============================================
  //I purposely made the text of the readme in this strange appending fashion so that I can come back and individually change each section later if I so desire.
  //I am aware that the code would be cleaner if I simply constructed all the text in one swoop with template literals
  var readmeText = "";
  var tocSections = [];
  console.log(`blank template is ${blankTemplate}`);
  if (data.description || blankTemplate) {
    readmeText += `\n## Description\n${data.description}\n`;
    tocSections.push("Description");
  }
  if (data.installation || blankTemplate) {
    readmeText += `\n## Installation\n${data.installation}\n`;
    tocSections.push("Installation");
  }
  if (data.usage || blankTemplate) {
    readmeText += `\n## Usage\n${data.usage}\n`;
    tocSections.push("Usage");
  }
  if (data.guidlines || blankTemplate) {
    readmeText += `\n## Guidlines\n${data.guidlines}\n`;
    tocSections.push("Guidlines");
  }
  if (data.tests || blankTemplate) {
    readmeText += `\n## Tests\n${data.tests}\n`;
    tocSections.push("Tests");
  }
  if (data.questionsGithub || data.questionsEmail || blankTemplate) {
    tocSections.push("Questions");
    readmeText += `\n## Questions\n You can contact me with questions in the following places:<br/>\n`;
    //prettier-ignore
    if (data.questionsGithub|| blankTemplate) {
      readmeText += `\nGithub Profile: ${getGithubProfileURL(data.questionsGithub)}<br/>`;
    }
    if (data.questionsEmail || blankTemplate) {
      readmeText += `\nEmail: ${data.questionsEmail}<br/>`;
    }
  }

  if (data.license != "none" || blankTemplate) {
    readmeText += `\n${renderLicenseSection(data.license)}`;
  }
  //prepend TOC
  if (data.toc == "Yes" || blankTemplate) {
    readmeText =
      `## Table of Contents\n${constructTOC(tocSections)}\n` + readmeText;
  }
  //Prepend Title
  readmeText = `# ${data.title}\n` + readmeText; //Add title

  return readmeText;
}
//Exports any needed functions for use elsewhere
module.exports = { generateMarkdown };
