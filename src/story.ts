import { Entity } from './entity';
import { Task } from './task';
import { Completable } from './completable';

export class Story extends Entity implements Completable {
    private _completed: boolean = false;
    private _owner: String;
    private _tasks: Array<Task> = [];

    get completed(): boolean { return this._completed; }
    set completed(completed: boolean) { this._completed = completed; }

    get owner(): String { return this._owner; }
    set owner(owner: String) { this._owner = owner; }

    /**
     * Add Task
     * 
     * @param task - Task to be added
     */
    addTask(task: Task) {
        this._tasks.push(task);
    }

    /**
     * Removes task
     * 
     * @param task - Task to be removed
     */
    removeTask(task: Task) {
        let index = this._tasks.indexOf(task);
        if (index != -1) {
            this._tasks.splice(index, 1);
        }
    }

    get tasks() : Array<Task> { return this._tasks; }
}