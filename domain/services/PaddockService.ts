import {PaddockAdapter} from "../../server/adapters/PaddockAdapter";
import {PaddockAdapterInterface} from "../../server/interfaces/PaddockAdapterInterface";
import {Animal} from "../classes/Animal";
import {Paddock} from "../classes/Paddock";

export class PaddockService {
    private static adapter: PaddockAdapterInterface = new PaddockAdapter();

    static assignAnimal(paddock: Paddock, animal: Animal) {
        if (this.isAnimalSpecieAuthorized(paddock, animal)) {
            this.adapter.addAnimal(animal, paddock);
        }
        return paddock;
    }

    static unassignAnimal(paddock: Paddock, animal: Animal) {
        this.adapter.removeAnimal(animal, paddock);
        return paddock;
    }

    private static isAnimalSpecieAuthorized(paddock: Paddock, animal: Animal) {
        return paddock.authorizedSpecies.includes(animal.specie);
    }

    static doesPaddockContainAnimals(paddock: Paddock) {
        return paddock.animals.length != 0;
    }
}