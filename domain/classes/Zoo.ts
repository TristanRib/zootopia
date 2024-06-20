import {ZooInterface} from "../interfaces/ZooInterface";
import {PaddockInterface} from "../interfaces/PaddockInterface";
import {name} from "ts-jest/dist/transformers/hoist-jest";

export class Zoo implements ZooInterface {
    private _name: string;
    private _paddocks: Array<PaddockInterface>;

    constructor(name: string, paddocks: Array<PaddockInterface>) {
        this._name = name;
        this._paddocks = paddocks;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get paddocks(): Array<PaddockInterface> {
        return this._paddocks;
    }

    set paddocks(value: Array<PaddockInterface>) {
        this._paddocks = value;
    }
}