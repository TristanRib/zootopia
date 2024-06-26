import {Zoo} from "../classes/Zoo";
import {Paddock} from "../classes/Paddock";
import {Animal} from "../classes/Animal";

export interface ForManagingZoo {
    addPaddock(zoo: Zoo, paddock: Paddock): void;

    removePaddock(zoo: Zoo, paddock: Paddock): void;

    addAnimal(zoo: Zoo, animal: Animal): void;

    removeAnimal(zoo: Zoo, animal: Animal): void;
}