const Task = require("../models/task");

class TaskRepository{

    _tasks = null;

    constructor(){
        this._tasks = [];
    }

    getAllTasks();

    createTask(title){
        task = new Task(title);
        this._tasks.push(task);
    };

    deleteTask();

    completeTask();
}