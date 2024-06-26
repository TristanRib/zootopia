import {Paddock} from "./Paddock";
import {Animal} from "./Animal";

export class Zoo {
    private _name: string;
    private readonly _paddocks: Array<Paddock>;
    private readonly _animals: Array<Animal>;

    constructor(name: string, paddocks: Array<Paddock>, animals: Array<Animal>) {
        this._name = name;
        this._paddocks = paddocks;
        this._animals = animals;
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

    get animals(): Array<Animal> {
        return this._animals;
    }
}