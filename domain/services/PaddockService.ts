import {PaddockInterface} from "../../server/interfaces/PaddockInterface";
import {Animal} from "../../server/classes/Animal";

export class PaddockService {
    public assignAnimal(paddock: PaddockInterface, animal: Animal) {
        if (paddock.authorizedSpecies.includes(animal.specie)) {
            paddock.addAnimal(animal);
        }
    }

    public unassignAnimal(paddock: PaddockInterface, animal: Animal) {
        if (paddock.animals.includes(animal)) {
            paddock.removeAnimal(animal);
        }
    }
}