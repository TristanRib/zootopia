import {AnimalInterface} from "./AnimalInterface";
import {PaddockInterface} from "./PaddockInterface";

export interface PaddockAdapterInterface {
    addAnimal(animal: AnimalInterface, paddock: PaddockInterface): void;

    removeAnimal(animal: AnimalInterface, paddock: PaddockInterface): void;
}