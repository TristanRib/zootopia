import {Paddock} from "./Paddock";

export class Zoo {
    private _name: string;
    private _paddocks: Array<Paddock>;

    constructor(name: string, paddocks: Array<Paddock>) {
        this._name = name;
        this._paddocks = paddocks;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get paddocks(): Array<Paddock> {
        return this._paddocks;
    }

    set paddocks(value: Array<Paddock>) {
        this._paddocks = value;
    }
}