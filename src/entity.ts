import { Log } from './log';

/**
 * Entity class
 */
export class Entity {
    private _id: number;
    private _title: string;
    private _creationDate: Date;

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        //this._creationDate = new Date();
    }

    get id(): number { return this._id; }

    get title(): string { return this._title; }
    get creationDate(): Date { return this._creationDate; }

    private static wait(ms: number) {
        let start = Date.now();
        let now = start;
        while (now - start < ms) {
          now = Date.now();
        }
    }
}