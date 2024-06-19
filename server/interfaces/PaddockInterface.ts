import {Animal} from "../classes/Animal";
import {SpecieEnum} from "../enums/SpecieEnum";

export interface PaddockInterface {
    get animals(): Array<Animal>;

    get authorizedSpecies(): Array<SpecieEnum>;

    addAnimal(animal: Animal): void;

    removeAnimal(animal: Animal): void;
}