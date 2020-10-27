# Markdown Generator

## Description
A node command-line application that helps users generate good readme files in the Markdown syntax.

## Installation
`git clone` this repository to your pc. Use node to run the application: `node index.js`.

## Usage
You'll be prompted to answer a series of questions; the answers to which will be used to populate the generated readme file. 

![screenshot of markdown generation in use](assets/readme/markdown_usage.png)

Note, at the prompt for entering your project's Usage instuctions, your system's default editor will open up. Configure the $VISUAL or $EDITOR environment variables to set your default editor. If neither of these are set, notepad (on Windows) or vim (Linux or Mac) will be used. When you save and close the editor, your responses will be captured by the application.

The generated markdown file will be named `<Project-Title>-README.md`. Any spaces in the project title will be replaced with dashes.

## License
![License](https://img.shields.io/badge/license-MIT-green)
