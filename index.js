const inquirer = require("inquirer")
const fs = require('fs');
const generateSite = require('./src/generateSite');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const teamsArr = [];
const teamManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Managers name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "what is the Managers ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the managers email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Managers office number?"
        }
    ])
        .then(managerData => {
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber);
            teamsArr.push(manager)
        })
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
            name: 'name',
            message: "What is the Employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Employees email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the Intern go to ?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's Github account?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Would you like to add more team members?",
            default: false
        }
    ])
        .then(teamData => {
            let { name, id, email, role, github, school, confirmAdd } = teamData;
            let employee;
            if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            }
            else if (role === "Engineer") {
                employee = new Engineer(name, id, email, github)
            }
            teamsArr.push(employee);
            if (confirmAdd) {
                return addTeam(teamsArr);
            } else {
                return teamsArr
            }

        })
};
const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team has been created check the index html file in /dist folder")
        }
    })
};

teamManager()
    .then(addTeam)
    .then(teamsArr => {
        return generateSite(teamsArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });