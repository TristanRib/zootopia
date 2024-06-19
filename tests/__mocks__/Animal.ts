import {SpecieEnum} from "../../server/enums/SpecieEnum";

export class Animal {
    constructor(public name: string, public age: number, public specie: SpecieEnum) {
    }
}