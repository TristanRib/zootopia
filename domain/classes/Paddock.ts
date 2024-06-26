import {SpecieEnum} from "../enums/SpecieEnum";
import {v4 as uid} from "uuid";
import {PaddockSizeEnum} from "../enums/PaddockSizeEnum";
import {Animal} from "./Animal";

export class Paddock {
    private readonly _uid: string;
    private _name: string;
    private _size: PaddockSizeEnum;
    private _authorizedSpecies: Array<SpecieEnum>;
    private _animals: Array<Animal>;

    constructor(name: string, size: PaddockSizeEnum, authorizedSpecies: Array<SpecieEnum>, animals: Array<Animal>) {
        this._uid = uid();
        this._name = name;
        this._size = size;
        this._authorizedSpecies = authorizedSpecies;
        this._animals = animals;
    }

    get uid(): string {
        return this._uid;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get size(): PaddockSizeEnum {
        return this._size;
    }

    set size(value: PaddockSizeEnum) {
        this._size = value;
    }

    get authorizedSpecies(): Array<SpecieEnum> {
        return this._authorizedSpecies;
    }

    set authorizedSpecies(value: Array<SpecieEnum>) {
        this._authorizedSpecies = value;
    }

    get animals(): Array<Animal> {
        return this._animals;
    }

    set animals(value: Array<Animal>) {
        this._animals = value;
    }
}