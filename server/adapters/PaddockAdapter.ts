import {PaddockAdapterInterface} from "../interfaces/PaddockAdapterInterface";
import {Animal} from "../../domain/classes/Animal";
import {Paddock} from "../../domain/classes/Paddock";

export class PaddockAdapter implements PaddockAdapterInterface {
    addAnimal(animal: Animal, paddock: Paddock): void {
        paddock.animals.push(animal);
    }

    removeAnimal(animal: Animal, paddock: Paddock): void {
        let index = paddock.animals.indexOf(animal);
        if (index >= 0) {
            paddock.animals.splice(index, 1);
        }
    }
}