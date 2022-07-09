const Manager =require("./lib/Manager");
const Engineer =require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const teamManager = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: "What is the Team Managers name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "what is the Managers ID"
        },
        {
            type:'input',
            name: 'email',
            message: "What is the managers email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Managers office number?"
        }
    ])
};

const addTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the role of this employee?",
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            type: 'name',
            message:"What is the name of the employee?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'input',
            type: 'email',
            message: "What is the employees email?"
        },
        {
            
        }
    ])
}