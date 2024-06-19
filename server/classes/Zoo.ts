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

    addPaddock(paddock: PaddockInterface): void {
        this._paddocks.push(paddock);
    }

    removePaddock(paddock: PaddockInterface): void {
        let index = this._paddocks.indexOf(paddock);
        this._paddocks.slice(index, 1);
    }
}