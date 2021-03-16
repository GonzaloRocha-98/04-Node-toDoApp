const Task = require("../models/Task");
const {getData, saveData} = require("../helpers/FileManager");
class TaskRepository{

    _tasks = null;

    constructor(){
        const data= getData();
        if (data) {
            this._tasks = data;
        }else{
            this._tasks = [];
        }
    }

    getAllTasks(){
        return this._tasks;
    };

    /**
     * 
     * @param {String} title 
     * TODO: Nos falta persistir datos en archivo
     */

    createTask(title){
        const task = new Task(title);
        this._tasks.push(task);
        saveData(this._tasks);
    };

    deleteTask(id){
        this._tasks = this._tasks.filter(item => item.id !== id);
        saveData(this._tasks);
    };

    completeTask(id){
        this._tasks.map(item => {if(item.id === id){item.done=true}} );
        saveData(this._tasks);
    };
};

module.exports = TaskRepository;
