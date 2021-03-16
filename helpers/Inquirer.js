const inquirer = require("inquirer");
require("colors");


const inquirerMenu = async() =>{
    const menu = [
        {
            type: 'list',
            name: 'option',
            message: 'What do you want to do?',
            choices: [
                {
                    value: 1,
                    name: `${'1- '.blue} Create Task`,
                },
                {
                    value: 2,
                    name: `${'2-'.blue} Show Tasks`
                },
                {   value: 3,
                    name:`${'3-'.blue} Complete Task`

                },
                {
                    value:4,
                    name:`${'4-'.blue} Delete Task`
                },
                {
                    value: 'x',
                    name: `${'x- '.blue} Exit`,
                }
            ]
        }
    ];

    console.log('=============================');
    console.log('Select an option'.white);
    console.log('=============================');

    const{option} = await inquirer.prompt(menu);
    return option
}

const inquirerInput = async(message)=>{
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
        }
    ];

    const {description} = await inquirer.prompt(question);
    return description
};

/**
 * 
 * @param {Array} arrayTasks 
 * @param {String} message 
 * @returns 
 */
const inquirerSubMenuChoices = async(arrayTasks, message ) =>{
    let choices = arrayTasks.map( (task,i) => ({value: task.id,name: `${i+1}) ${task.title.yellow}`}) )
    const subMenu = [
        {
            type: 'list',
            name: 'choice',
            message,
            choices
        }
    ];
    const {choice} = await inquirer.prompt(subMenu);
    return choice
}

module.exports = {
    inquirerMenu,
    inquirerInput,
    inquirerSubMenuChoices
}