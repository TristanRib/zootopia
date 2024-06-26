import {Animal} from "../classes/Animal";
import {Paddock} from "../classes/Paddock";

export interface ForManagingPaddocks {
    addAnimal(animal: Animal, paddock: Paddock): void;

    removeAnimal(animal: Animal, paddock: Paddock): void;
}