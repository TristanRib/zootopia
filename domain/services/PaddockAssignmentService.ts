import {PaddockAdapter} from "../../server/adapters/PaddockAdapter";
import {ForManagingPaddocks} from "../../server/ports/ForManagingPaddocks";
import {Animal} from "../classes/Animal";
import {Paddock} from "../classes/Paddock";

export class PaddockAssignmentService {
    private static port: ForManagingPaddocks = new PaddockAdapter();

    public static assignAnimal(paddock: Paddock, animal: Animal) {
        if (this.isAnimalSpecieAuthorized(paddock, animal) && !this.isPaddockFull(paddock)) {
            this.port.addAnimal(animal, paddock);
        }
        return paddock;
    }

    public static unassignAnimal(paddock: Paddock, animal: Animal) {
        this.port.removeAnimal(animal, paddock);
        return paddock;
    }

    private static isAnimalSpecieAuthorized(paddock: Paddock, animal: Animal) {
        return paddock.authorizedSpecies.includes(animal.specie);
    }

    private static isPaddockFull(paddock: Paddock) {
        return paddock.size == paddock.animals.length;
    }

    static isPaddockContainingAnimals(paddock: Paddock) {
        return paddock.animals.length != 0;
    }
}