// fs is a Node standard library package for reading and writing files
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Write your table contents if your README is very long. (Optional)',
            name: 'tableOfContents',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project if any?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is your project used for? ',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What guidelines do you have have for other developers contributing to your project? ',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Please provide example(s) of how to run test for your project.',
            name: 'test'
        },
        {
            type: 'list',
            message: 'Choose a license for your project.',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPL...v3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ])
    .then((response) => {
        console.log(response);
        if (response.animal === "Peter") {
            console.log("You have chosen the correct animal!!");
        }
        if (response.section === "Installation") {
            // * [Installation](#installation)
            fs.writeFile("file.txt", "* [Installation](#installation)", (err) => {
                if (err) console.error(err);
                console.log("Written to file...");
            });
        }

        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    });

