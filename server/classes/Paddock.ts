import {SpecieEnum} from "../enums/SpecieEnum";
import {PaddockInterface} from "../../domain/interfaces/PaddockInterface";
import {AnimalInterface} from "../../domain/interfaces/AnimalInterface";
import {v4 as uid} from "uuid";

export class Paddock implements PaddockInterface {
    private readonly _uid: string;
    private _name: string;
    private _size: SizeEnum;
    private _authorizedSpecies: Array<SpecieEnum>;
    private _animals: Array<AnimalInterface>;

    constructor(name: string, size: SizeEnum, authorizedSpecies: Array<SpecieEnum>, animals: Array<AnimalInterface>) {
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

    get size(): SizeEnum {
        return this._size;
    }

    set size(value: SizeEnum) {
        this._size = value;
    }

    get authorizedSpecies(): Array<SpecieEnum> {
        return this._authorizedSpecies;
    }

    set authorizedSpecies(value: Array<SpecieEnum>) {
        this._authorizedSpecies = value;
    }

    get animals(): Array<AnimalInterface> {
        return this._animals;
    }

    set animals(value: Array<AnimalInterface>) {
        this._animals = value;
    }

    public addAnimal(animal: AnimalInterface) {
        this._animals.push(animal);
    }

    public removeAnimal(animal: AnimalInterface) {
        let index = this._animals.indexOf(animal);
        this._animals.slice(index, 1);
    }
}