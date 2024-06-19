import {SpecieEnum} from "../../domain/enums/SpecieEnum";

export class Animal {
    constructor(public uid: string, public name: string, public age: number, public specie: SpecieEnum) {
    }
}