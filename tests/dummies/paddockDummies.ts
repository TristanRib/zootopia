import {Paddock} from "../../domain/classes/Paddock";
import {PaddockSizeEnum} from "../../domain/enums/PaddockSizeEnum";
import {SpecieEnum} from "../../domain/enums/SpecieEnum";
import {Animal} from "../../domain/classes/Animal";
import {createAnimalDummy} from "./animalDummies";

export const createPaddockWithAnimals = (authorizedSpecies : Array<SpecieEnum>, nbOfAnimals : number, specieOfAnimals: SpecieEnum) => {
    let animalList: Array<Animal> = [];

    for (let counter = 0; counter < nbOfAnimals; counter++){
        animalList.push(createAnimalDummy(specieOfAnimals));
    }

    return new Paddock('Paddock', PaddockSizeEnum.Small, authorizedSpecies, animalList);
}