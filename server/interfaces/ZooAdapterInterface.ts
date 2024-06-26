import {Zoo} from "../../domain/classes/Zoo";
import {Paddock} from "../../domain/classes/Paddock";
import {Animal} from "../../domain/classes/Animal";

export interface ZooAdapterInterface {
    addPaddock(zoo: Zoo, paddock: Paddock): void;

    removePaddock(zoo: Zoo, paddock: Paddock): void;

    addAnimal(zoo: Zoo, animal: Animal): void;

    removeAnimal(zoo: Zoo, animal: Animal): void;
}