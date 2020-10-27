// function to generate license text
function getLicenseText(license, github) {
  let licenseText;
  switch(license) {
    case 'apache': licenseText =
`Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/`;
      break;
    case 'gpl3': licenseText =
`GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/`;
      break;
    case 'mit': licenseText =
`MIT License
Copyright (C) ${new Date().getFullYear()} ${github}`;
      break;
  }
  return licenseText;
}

// function to generate license badge
function getLicenseBadge(license) {
  let url;
  switch(license) {
    case 'apache': url = `https://img.shields.io/badge/license-Apache%202-blue`; break;
    case 'gpl3': url =  `https://img.shields.io/badge/license-GPL%203-blue`; break;
    case 'mit': url =  `https://img.shields.io/badge/license-MIT-green`; break;
  }
  return url;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

![License](${getLicenseBadge(data.license)})

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${getLicenseText(data.license, data.github)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions you can reach me via my [GitHub: ${data.github}](https://github.com/${data.github}) or by [email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
