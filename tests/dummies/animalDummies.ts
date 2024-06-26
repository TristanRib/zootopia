import {SpecieEnum} from "../../domain/enums/SpecieEnum";
import {Animal} from "../../domain/classes/Animal";

export const createAnimalDummy = (specie: SpecieEnum) => {
    return new Animal('Name', new Date(), specie)
};