import {PaddockInterface} from "../interfaces/PaddockInterface";
import {AnimalInterface} from "../interfaces/AnimalInterface";
import {PaddockAdapter} from "../../server/adapters/PaddockAdapter";
import {PaddockAdapterInterface} from "../interfaces/PaddockAdapterInterface";

export class PaddockService {
    private static adapter: PaddockAdapterInterface = new PaddockAdapter();

    static assignAnimal(paddock: PaddockInterface, animal: AnimalInterface) {
        if (paddock.authorizedSpecies.includes(animal.specie)) {
            this.adapter.addAnimal(animal, paddock);
        }
    }

    static unassignAnimal(paddock: PaddockInterface, animal: AnimalInterface) {
        this.adapter.removeAnimal(animal, paddock);
    }
}