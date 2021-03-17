const TaskRepository = require("../repositories/TaskRepository");
const taskRepository = new TaskRepository();

const showAllTasks = () =>{
    let status ='';
    const allTasks = taskRepository.getAllTasks();
    allTasks.forEach(task => {
        task.done == true ? status=`${'status'.magenta} = ${'COMPLETE'.green}`
        : status = `${'status'.magenta} = ${'INCOMPLETE'.red}`;
        console.log(task.title, status);
    });
}

const getAllTasks = ()=>{
    return taskRepository.getAllTasks();
}

const createTask = (title) =>{
    taskRepository.createTask(title)
}

const completeTask = (id) =>{
    taskRepository.completeTask(id);
    console.log('Task completed'.green);                
}

const deleteTask = (id) => {
    taskRepository.deleteTask(id);
    console.log('Task deleted'.red);
}
module.exports = {
    getAllTasks,
    createTask,
    completeTask,
    deleteTask,
    showAllTasks
}
