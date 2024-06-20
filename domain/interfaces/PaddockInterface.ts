
import {AnimalInterface} from "./AnimalInterface";
import {SizeEnum} from "../enums/SizeEnum";
import {SpecieEnum} from "../enums/SpecieEnum";

export interface PaddockInterface {
    get uid(): string;

    get name(): string;

    set name(value: string);

    get size(): SizeEnum;

    set size(value: SizeEnum);

    get authorizedSpecies(): Array<SpecieEnum>;

    set authorizedSpecies(value: Array<SpecieEnum>);

    get animals(): Array<AnimalInterface>;

    set animals(value: Array<AnimalInterface>);
}