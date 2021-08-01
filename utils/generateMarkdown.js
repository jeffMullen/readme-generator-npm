// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty stringx
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0] === 'None') {
    const licenseChoice = '';
    return licenseChoice;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Test](#Tests)
  * [Questions](#Questions)

  ${renderLicenseSection(data.license)}

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
  
  [${data.github}](${data.github})

  If you have additional questions, feel free to reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
