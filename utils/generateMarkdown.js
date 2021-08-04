// Badge is generated and when clicked on, linked to license information
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let response;
  switch (license[0]) {
    case 'None':
      response = '';
      break;
    case 'Apache License 2.0':
      response = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'GNU General Public License v3.0':
      response = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT License':
      response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      response = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      response = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Boost Software License 1.0':
      response = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      response = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case 'Eclipse Public License 1.0':
      response = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'GNU Affero General Public License v3.0':
      response = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU General Public License v2.0':
      response = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GNU Lesser General Public License v3.0':
      response = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case 'Mozilla Public License 2.0':
      response = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'The Unlicense':
      response = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;

  }
  return response;
}

// Output line telling user how to get license details
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `Click on the badge to see **${license}** details.`
}

// Create license section if a license is picked
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0] === 'None') {
    return '';
  } else {
    return `## License \nThis project is covered under the ${license[0]}.
    `
  }
}

// Create README markdown file
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  
  [github.com/${data.github}](https://github.com/${data.github})

  If you have additional questions, feel free to reach me at ${data.email}
`;
}

// Export README to index.js
module.exports = generateMarkdown;
