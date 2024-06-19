// Paddock.test.ts
import {Paddock} from '../server/classes/Paddock';
import {Animal} from "../server/classes/Animal";
import {SpecieEnum} from "../server/enums/SpecieEnum";

jest.mock('../server/classes/Paddock');

describe('Paddock', () => {

    // GIVEN
    let animals: Array<Animal>;
    let paddock: Paddock;

    beforeEach(() => {
        animals = [
            new Animal('TigerName', 5, SpecieEnum.Feline),
            new Animal('Tigrou', 2, SpecieEnum.Feline),
        ];
        paddock = new Paddock('Southern Paddock', SizeEnum.Small, [SpecieEnum.Equine], []);
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