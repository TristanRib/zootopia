import {SpecieEnum} from "../../server/enums/SpecieEnum";

export interface AnimalInterface {
    get specie(): SpecieEnum;
}