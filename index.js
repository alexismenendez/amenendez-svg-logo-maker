const inquirer = require('inquirer')
const fs = require('fs')
const {} = require('./lib/shapes.js')

const questions = [
    {
        type: "input",
        name: "logoText",
        message: "Enter text for your logo (Up to 3 characters)"
    },
    {
        type: "input",
        name: "logoTextColor",
        message: "Choose color for your text (Color keyword or Hexadecimal number)"
    },
    {
        type: "list",
        name: "logoShape",
        message: "Choose the background shape for your logo",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "logoShapeColor",
        message: "Choose color for your background shape (Color keyword or Hexadecimal number)"
    }
]

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log("Your choices: ", data);
            console.log("Generated logo.svg")
        });
};

init();