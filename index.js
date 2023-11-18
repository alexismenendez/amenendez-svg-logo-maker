const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes.js')

const questions = [
    {
        type: "input",
        name: "logoText",
        message: "Enter text for your logo (Up to 3 characters)",
        validate: function(logoText) {
            if (logoText.length > 3) {
                return console.log("Text exceeds 3 characcters! Please try again.")
            }
            return true
        }
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

function generateLogo(data) {
    const shapeInput = data.logoShape;
    var userShape

    if (shapeInput === "Circle") {
        userShape = new Circle();
    } else if (shapeInput === "Triangle") {
        userShape = new Triangle();
    } else {
        userShape = new Square();
    }

    userShape.setColor(data.logoShapeColor)

    const logo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${userShape.render()}
    <text fill="${data.logoTextColor}" font-size="45" font-family="Verdana" x="150" y="100" text-anchor="middle" alignment-baseline="middle">${data.logoText}</text>
    </svg>`

    fs.writeFile('./examples/logo.svg', logo, (err) => {
        if (err) {
            console.error('Error creating logo.svg: ', err);
        
        } else {
            console.log('logo.svg created successfully!');
        }
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            generateLogo(data);
        });
};

init();