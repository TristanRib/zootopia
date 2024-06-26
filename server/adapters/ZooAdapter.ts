import {ForManagingZoo} from "../ports/ForManagingZoo";
import {Zoo} from "../../domain/classes/Zoo";
import {Paddock} from "../../domain/classes/Paddock";
import {Animal} from "../../domain/classes/Animal";

export class ZooAdapter implements ForManagingZoo {
    addPaddock(zoo: Zoo, paddock: Paddock): void {
        zoo.paddocks.push(paddock);
    }

    removePaddock(zoo: Zoo, paddock: Paddock): void {
        let index = zoo.paddocks.indexOf(paddock);
        if (index >= 0) {
            zoo.paddocks.splice(index, 1);
        }
    }

    addAnimal(zoo: Zoo, animal: Animal): void {
        zoo.animals.push(animal);
    }

    removeAnimal(zoo: Zoo, animal: Animal): void {
        let index = zoo.animals.indexOf(animal);
        if (index >= 0) {
            zoo.animals.splice(index, 1);
        }
    }
}