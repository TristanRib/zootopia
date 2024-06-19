import {Animal} from "../../server/classes/Animal";
import {SpecieEnum} from "../../server/enums/SpecieEnum";

export interface PaddockInterface {
    get animals(): Array<Animal>;

    get authorizedSpecies(): Array<SpecieEnum>;

    addAnimal(animal: Animal): void;

    removeAnimal(animal: Animal): void;
}