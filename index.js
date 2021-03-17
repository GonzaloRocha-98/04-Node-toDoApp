const {inquirerMenu, inquirerInput, inquirerSubMenuChoices} = require('./helpers/Inquirer');
const {getAllTasks, createTask, completeTask, deleteTask, showAllTasks} = require("./services/fileServices")

const main = async () => {
    
    let option = "";
    let id="";
    let message='';

    do {
        option = await inquirerMenu(); 

        switch (option) {
            case 1:
                //console.log('El usuario seleccionó la opcion crear tarea');
                const title = await inquirerInput('Task Title');
                createTask(title);
                break;
            
            case 2:
                //console.log('El usuario selecciono la opcion mostrar lista de tareas');
                showAllTasks();
                break;
            case 3:
                //console.log('El usuario selecciono la opcion completar tarea');
                message = 'Choose the task that you want to complete';
                id = await inquirerSubMenuChoices(getAllTasks(),message);
                completeTask(id);
                break;
            case 4:
                //console.log('El usuario selecciono la opcion borrar tarea');
                message = 'Choose the task that you wan to delete'
                id = await inquirerSubMenuChoices(getAllTasks(), message);
                deleteTask(id);
                break;
        }
    } while (option !== 'x');


};

main();