// Tiger.test.ts
import {Animal} from '../domain/classes/Animal';
import {SpecieEnum} from "../domain/enums/SpecieEnum";

jest.mock('../domain/classes/Animal');

describe('Animal', () => {
    // GIVEN
    let animal: Animal;

    beforeEach(() => {
        animal = new Animal('1', 'TigerName', 5, SpecieEnum.Feline);
    });

    it('should be as created', () => {
        // THEN
        expect(animal).toBeInstanceOf(Animal);

        expect(animal.uid).toBe('1');
        expect(animal.name).toBe('TigerName');
        expect(animal.age).toBe(5);
        expect(animal.specie).toBe(SpecieEnum.Equine);
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