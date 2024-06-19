import {ZooInterface} from "../../domain/interfaces/ZooInterface";
import {PaddockInterface} from "../../domain/interfaces/PaddockInterface";

export class Zoo implements ZooInterface {
    private _paddocks: Array<PaddockInterface>;

    constructor(paddocks: Array<PaddockInterface>) {
        this._paddocks = paddocks;
    }

    get paddocks(): Array<PaddockInterface> {
        return this._paddocks;
    }

    set paddocks(value: Array<PaddockInterface>) {
        this._paddocks = value;
    }
}