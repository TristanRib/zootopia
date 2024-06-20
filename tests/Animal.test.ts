// Tiger.test.ts

import {Animal} from "../domain/classes/Animal";
import {SpecieEnum} from "../domain/enums/SpecieEnum";
import {AnimalInterface} from "../domain/interfaces/AnimalInterface";

describe('Animal', () => {
    // GIVEN
    let animal: AnimalInterface;

    beforeEach(() => {
        animal = new Animal('TigerName', 5, SpecieEnum.Feline);
    });

    it('should be as expected', () => {
        // THEN
        expect(animal).toBeInstanceOf(Animal);
        expect(animal.name).toBe('TigerName');
        expect(animal.age).toBe(5);
        expect(animal.specie).toBe(SpecieEnum.Feline);
    });

    it('should be modified', () => {
        // WHEN
        animal.name = "Maurice";
        animal.age = 4;

        // THEN
        expect(animal.name).toBe("Maurice");
        expect(animal.age).toBe(4);
    });
});