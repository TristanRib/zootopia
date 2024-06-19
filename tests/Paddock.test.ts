// Paddock.test.ts
import {Paddock} from '../domain/classes/Paddock';
import {Animal} from "../domain/classes/Animal";
import {SpecieEnum} from "../domain/enums/SpecieEnum";

jest.mock('../domain/classes/Paddock');

describe('Paddock', () => {

    // GIVEN
    let animals: Array<Animal>;
    let paddock: Paddock;

    beforeEach(() => {
        animals = [new Animal('1', 'TigerName', 5, SpecieEnum.Feline), new Animal('2', 'Tigrou', 2, SpecieEnum.Feline)];
        paddock = new Paddock('1', 'Southern Paddock', SizeEnum.Small, [SpecieEnum.Equine], []);
    });

    it('should be like the default type', () => {
        // THEN
        expect(paddock).toBeInstanceOf(Paddock);
        expect(paddock.size).toBe(SizeEnum.Small);
        expect(paddock.animals.length).toBe(0);
    });

    it('should have two animals', () => {
        // WHEN


        // THEN
        expect(paddock.animals.length).toBe(2);
    });

});