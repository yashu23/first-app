import { Entity } from './entity';
import { Completable } from './completable';

export class Task extends Entity implements Completable {
    private _completed: boolean = false;
    private _priority: number = -1;

    get completed(): boolean { return this._completed; }
    set completed(completed: boolean) { this._completed = completed; }
    
    get priority(): number { return this._priority; }
    set priority(priority: number) { this._priority = priority; }
}