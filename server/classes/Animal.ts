import {SpecieEnum} from "../enums/SpecieEnum";

export class Animal {
    private _uid: string;
    private _name: string;
    private _age: number;
    private _specie: SpecieEnum;

    constructor(uid: string, name: string, age: number, specie: SpecieEnum) {
        this._uid = uid;
        this._name = name;
        this._age = age;
        this._specie = specie;
    }

    get uid(): string {
        return this._uid;
    }

    set uid(value: string) {
        this._uid = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get specie(): SpecieEnum {
        return this._specie;
    }

    set specie(value: SpecieEnum) {
        this._specie = value;
    }
}

