import {Paddock} from "./Paddock";
import {Animal} from "./Animal";

export class Zoo {
    private _animals: Array<Animal>;
    private _paddocks: Array<Paddock>;

    constructor(animals: Array<Animal>, paddocks: Array<Paddock>) {
        this._animals = animals;
        this._paddocks = paddocks;
    }

    get animals(): Array<Animal> {
        return this._animals;
    }

    set animals(value: Array<Animal>) {
        this._animals = value;
    }

    get paddocks(): Array<Paddock> {
        return this._paddocks;
    }

    set paddocks(value: Array<Paddock>) {
        this._paddocks = value;
    }
}