import {Paddock} from "./Paddock";
import {ZooInterface} from "../interfaces/ZooInterface";

export class Zoo implements ZooInterface {
    private _paddocks: Array<Paddock>;

    constructor(paddocks: Array<Paddock>) {
        this._paddocks = paddocks;
    }

    get paddocks(): Array<Paddock> {
        return this._paddocks;
    }

    set paddocks(value: Array<Paddock>) {
        this._paddocks = value;
    }

    addPaddock(paddock: Paddock): void {
        this._paddocks.push(paddock);
    }

    removePaddock(paddock: Paddock): void {
        let index = this._paddocks.indexOf(paddock);
        this._paddocks.slice(index, 1);
    }
}