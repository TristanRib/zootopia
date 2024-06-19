import {PaddockInterface} from "../interfaces/PaddockInterface";
import {AnimalInterface} from "../interfaces/AnimalInterface";

export class PaddockService {
    static assignAnimal(paddock: PaddockInterface, animal: AnimalInterface) {
        if (paddock.authorizedSpecies.includes(animal.specie)) {
            paddock.addAnimal(animal);
        }
    }

    static unassignAnimal(paddock: PaddockInterface, animal: AnimalInterface) {
        if (paddock.animals.includes(animal)) {
            paddock.removeAnimal(animal);
        }
    }
}