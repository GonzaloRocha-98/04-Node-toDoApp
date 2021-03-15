const {inquirerMenu, inquirerInput} = require('./helpers/Inquirer');
const TaskRepository = require("./repositories/TaskRepository");

const main = async () => {
    
    const taskRepository = new TaskRepository();

    let option = "";

    do {
        option = await inquirerMenu(); 

        switch (option) {
            case 1:
                console.log('El usuario seleccionó la opcion crear tarea');
                const title = await inquirerInput('Task Title');
                taskRepository.createTask(title);
                break;
            
            case 2:
                console.log('El usuario selecciono la pcion mostrar lista');
                const allTasks = taskRepository.getAllTasks();
                allTasks.forEach(task => {
                    console.log(task.title);
                });
                break;
        }
    } while (option !== 'x');


};

main();