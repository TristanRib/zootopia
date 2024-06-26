import {SpecieEnum} from "../enums/SpecieEnum";
import {v4 as uid} from "uuid";

export class Animal {
    private readonly _uid: string;
    private _name: string;
    private readonly _dateOfBirth: Date;
    private _specie: SpecieEnum;

    constructor(name: string, dateOfBirth: Date, specie: SpecieEnum) {
        this._uid = uid();
        this._name = name;
        this._dateOfBirth = dateOfBirth;
        this._specie = specie;
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

    get age(): number {
        let diff = Date.now() - this._dateOfBirth.getTime();
        return Math.abs(new Date(diff).getUTCFullYear() - 1970);
    }

    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }

    get specie(): SpecieEnum {
        return this._specie;
    }

    set specie(value: SpecieEnum) {
        this._specie = value;
    }
}

