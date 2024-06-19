import {SpecieEnum} from "../../server/enums/SpecieEnum";

export interface AnimalInterface {
    get uid(): string;

    set uid(value: string);

    get name(): string;

    set name(value: string);

    get age(): number;

    set age(value: number);

    get specie(): SpecieEnum;

    set specie(value: SpecieEnum);
}