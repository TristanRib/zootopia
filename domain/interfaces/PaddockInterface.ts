import {SpecieEnum} from "../../server/enums/SpecieEnum";
import {AnimalInterface} from "./AnimalInterface";
import {SizeEnum} from "../../server/enums/SizeEnum";

export interface PaddockInterface {
    get uid(): string;

    set uid(value: string);

    get name(): string;

    set name(value: string);

    get size(): SizeEnum;

    set size(value: SizeEnum);

    get authorizedSpecies(): Array<SpecieEnum>;

    set authorizedSpecies(value: Array<SpecieEnum>);

    get animals(): Array<AnimalInterface>;

    set animals(value: Array<AnimalInterface>);

    addAnimal(animal: AnimalInterface): void;

    removeAnimal(animal: AnimalInterface): void;
}