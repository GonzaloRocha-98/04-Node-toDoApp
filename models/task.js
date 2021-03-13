import { v4 as uuidv4 } from 'uuid';


class Task{

    id = "";
    title = "";
    done = false;
    created = null;
    finished = null;

    constructor(title){
        this.id = uuidv4();
        this.title = title;
        this.done=false;
        this.created = new Date();
    }

}
module.exports = Task;
