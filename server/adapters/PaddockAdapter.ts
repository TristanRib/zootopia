import {AnimalInterface} from "../../domain/interfaces/AnimalInterface";
import {PaddockInterface} from "../../domain/interfaces/PaddockInterface";
import {PaddockAdapterInterface} from "../../domain/interfaces/PaddockAdapterInterface";

export class PaddockAdapter implements PaddockAdapterInterface {
    addAnimal(animal: AnimalInterface, paddock: PaddockInterface) {
        paddock.animals.push(animal);
    }

    removeAnimal(animal: AnimalInterface, paddock: PaddockInterface) {
        let index = paddock.animals.indexOf(animal);
        paddock.animals.slice(index, 1);
    }
}