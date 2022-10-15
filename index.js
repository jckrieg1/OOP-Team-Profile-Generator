const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/generateHTML.js');

let team = []
const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('process');

function managerInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Who is the manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'ID of the manager'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?'
            },
        ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.officeNumber, data.email)
            team.push(manager);

            addEmployee()
        });
}


const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add another employee?',
            name: 'newEmployee',
            choices: ['intern', 'engineer', 'no other employees']
        }
    ])
        .then(data => {
            switch (data.newEmployee) {
                case 'intern':
                    addIntern();
                    break;
                case 'engineer':
                    addEngineer();
                    break;
                case 'no other employees':
                    let teamInfo = generateHTML(team)
                    fs.writeFile('./src/index.html',teamInfo,(err) =>
                    err ? console.log(err) : console.log('Success!')
                );
                    break;
            }

        })
}


const addIntern = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Who is the intern?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?'
    }
])


.then((data) => {
    console.log(data);
    const intern = new Intern(data.name, data.id, data.email, data.school)
            console.log(intern.getName());
            team.push(intern);
            addEmployee()
}
)
}

const addEngineer = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Who is the engineer?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub username?'
    }
])
.then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
            team.push(engineer);
            addEmployee()
}
)
}



managerInfo()