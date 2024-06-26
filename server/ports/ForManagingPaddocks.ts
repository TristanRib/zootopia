import {Animal} from "../../domain/classes/Animal";
import {Paddock} from "../../domain/classes/Paddock";

export interface ForManagingPaddocks {
    addAnimal(animal: Animal, paddock: Paddock): void;

    removeAnimal(animal: Animal, paddock: Paddock): void;
}