const {inquirerMenu, inquirerInput, inquirerSubMenuChoices} = require('./helpers/Inquirer');
const TaskRepository = require("./repositories/TaskRepository");

const main = async () => {
    
    const taskRepository = new TaskRepository();

    let option = "";
    let id="";
    let status =`${'status'.magenta} = `;
    let message='';

    do {
        option = await inquirerMenu(); 

        switch (option) {
            case 1:
                //console.log('El usuario seleccionó la opcion crear tarea');
                const title = await inquirerInput('Task Title');
                taskRepository.createTask(title);
                break;
            
            case 2:
                //console.log('El usuario selecciono la opcion mostrar lista de tareas');
                const allTasks = taskRepository.getAllTasks();
                allTasks.forEach(task => {
                    task.done == true ? status=`${'status'.magenta} = ${'COMPLETE'.green}`
                    : status = `${'status'.magenta} = ${'INCOMPLETE'.red}`;
                    console.log(task.title, status);
                });
                break;
            case 3:
                //console.log('El usuario selecciono la opcion completar tarea');
                message = 'Choose the task that you want to complete';
                id = await inquirerSubMenuChoices(taskRepository.getAllTasks(),message);
                taskRepository.completeTask(id);
                console.log('Task completed'.green);
                break;
            case 4:
                //console.log('El usuario selecciono la opcion borrar tarea');
                message = 'Choose the task that you wan to delete'
                id = await inquirerSubMenuChoices(taskRepository.getAllTasks(), message);
                taskRepository.deleteTask(id);
                console.log('Task deleted'.red);
                break;
        }
    } while (option !== 'x');


};

main();