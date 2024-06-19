import {AnimalInterface} from "../../domain/interfaces/AnimalInterface";
import {PaddockInterface} from "../../domain/interfaces/PaddockInterface";
import {PaddockAdapterInterface} from "../../domain/interfaces/PaddockAdapterInterface";

export class PaddockAdapter implements PaddockAdapterInterface {
    addAnimal(animal: AnimalInterface, paddock: PaddockInterface): void {
        paddock.animals.push(animal);
    }

    removeAnimal(animal: AnimalInterface, paddock: PaddockInterface): void {
        let index = paddock.animals.indexOf(animal);
        if (index != -1) {
            paddock.animals.slice(index, 1);
        }
    }
}