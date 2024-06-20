import {AnimalInterface} from "../../domain/interfaces/AnimalInterface";
import {PaddockInterface} from "../../domain/interfaces/PaddockInterface";

export interface PaddockAdapterInterface {
    addAnimal(animal: AnimalInterface, paddock: PaddockInterface): void;

    removeAnimal(animal: AnimalInterface, paddock: PaddockInterface): void;
}