//required packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);



// prompt user will use the inquirer package to prompt users with a series of questions
const promptUser = () => {
    return inquirer.prompt([
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
            message: 'Who is contributing to this project',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Please provide example(s) of how to run test for your project.',
            name: 'tests'
        },
        {
            type: 'list',
            message: 'Choose a license for your project.',
            choices: ["Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"],
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
    ]);
};

// write README file use the fs.writeFile package
function writeToFile(fileName, data) { 
    return writeFileAsync(fileName, data);
}

// Create a function to initialize app using async and try
async function init() { 
    try {
        //Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);

        //Call writeToFile function to write new README.md file 
        await writeToFile('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }
    catch(err) {
        console.log(err);
    }
};

// Function call to initialize app
init();

