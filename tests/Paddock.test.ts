// Paddock.test.ts
import {PaddockService} from "../domain/services/PaddockService";
import {Paddock} from "../domain/classes/Paddock";
import {SizeEnum} from "../domain/enums/SizeEnum";
import {SpecieEnum} from "../domain/enums/SpecieEnum";
import {Animal} from "../domain/classes/Animal";
import {PaddockInterface} from "../domain/interfaces/PaddockInterface";

describe('Paddock', () => {

    // GIVEN
    let paddock: PaddockInterface;

    beforeEach(() => {
        paddock = new Paddock('Southern Paddock', SizeEnum.Small, [SpecieEnum.Feline], []);
    });

    it('should be as expected', () => {
        // THEN
        expect(paddock).toBeInstanceOf(Paddock);
        expect(paddock.name).toBe('Southern Paddock');
        expect(paddock.size).toBe(SizeEnum.Small);
        expect(paddock.authorizedSpecies).toStrictEqual([SpecieEnum.Feline]);
        expect(paddock.animals.length).toBe(0);
    });

    it('should be modified', () => {
        // WHEN
        paddock.name = "Northern Paddock";

        // THEN
        expect(paddock.name).toBe('Northern Paddock');
    });

    it('should be able to receive animals from authorized species', () => {
        // WHEN
        PaddockService.assignAnimal(paddock, new Animal('TigerName', 5, SpecieEnum.Feline),)
        PaddockService.assignAnimal(paddock, new Animal('Tigrou', 2, SpecieEnum.Feline),)

        // THEN
        expect(paddock.animals.length).toBe(2);
    });

    it('should not be able to receive animals not in authorized species', () => {
        // WHEN
        PaddockService.assignAnimal(paddock, new Animal('Pony', 5, SpecieEnum.Equine),);

        // THEN
        expect(paddock.animals.length).toBe(0);
    });

    it('should be able to remove animals', () => {
        // GIVEN
        let animal = new Animal('TigerName', 5, SpecieEnum.Feline);
        PaddockService.assignAnimal(paddock, animal);

        // WHEN
        PaddockService.unassignAnimal(paddock, animal);

        // THEN
        expect(paddock.animals.length).toBe(0);
    });
});