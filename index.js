const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateFiles');

const teamArray = [];

const questionPromptManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name: ",
            validate: teamManagerNameInput => {
                if (teamManagerNameInput){
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's ID: ",
            validate: teamManagerIdInput => {
                if (teamManagerIdInput){
                    return true;
                } else {
                    console.log("Please enter the team manager's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email address: ",
            validate: teamManagerEmailInput => {
                if (teamManagerEmailInput){
                    return true;
                } else {
                    console.log("Please enter the team manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team manager's office number: ",
            validate: teamManagerOfficeNumInput => {
                if (teamManagerOfficeNumInput){
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            }
        },
        
    ]).then(function(data)  {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const officeNumber = data.officeNumber;
        
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
     })
};

const continueChoices = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'continues',
            message: 'Please choose an option below: ',
            choices: ['ADD: Engineer', 'ADD: Intern', 'DONE: Generate Team Profile']
        }
    ]).then((data) => {
        if (data.continues === 'ADD: Engineer') {
            return addEngineer();
        } if (data.continues === 'ADD: Intern') {
            return addIntern();
        } if (data.continues === 'DONE: Generate Team Profile')
            var file = generateHtml(teamArray);
            return writeToFile(file);
        })
};

const addEngineer = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name: ",
            validate: engineerNameInput => {
                if (engineerNameInput){
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's ID: ",
            validate: engineerIdInput => {
                if (engineerIdInput){
                    return true;
                } else {
                    console.log("Please enter the engineer's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address: ",
            validate: engineerEmailInput => {
                if (engineerEmailInput){
                    return true;
                } else {
                    console.log("Please enter the engineer's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username: ",
            validate: engineerGitHubUserName => {
                if (engineerGitHubUserName){
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false;
                }
            }
        }
    ]).then(function(data)  {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const github = data.github;
        
        const engineer = new Engineer(name, id, email, github);
        teamArray.push(engineer);
        continueChoices();

    })
};

const addIntern = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name: ",
            validate: internNameInput => {
                if (internNameInput){
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's ID: ",
            validate: internIdInput => {
                if (internIdInput){
                    return true;
                } else {
                    console.log("Please enter the intern's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address: ",
            validate: internEmailInput => {
                if (internEmailInput){
                    return true;
                } else {
                    console.log("Please enter the intern's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the school the intern attended: ",
            validate: internSchoolInput => {
                if (internSchoolInput){
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ]).then(function(data)  {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const school = data.school;
        
        const intern = new Intern(name, id, email, school);
        teamArray.push(intern);
        continueChoices();

    })
};

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'File created!'
                });
        });
    });
};

questionPromptManager().then(data => {
    return continueChoices();
 });

