// Paddock.test.ts
import {Paddock} from '../server/classes/Paddock';
import {Animal} from "../server/classes/Animal";
import {SpecieEnum} from "../server/enums/SpecieEnum";
import {SizeEnum} from "../server/enums/SizeEnum";
import {PaddockService} from "../domain/services/PaddockService";
import {AnimalInterface} from "../domain/interfaces/AnimalInterface";

describe('Paddock', () => {

    // GIVEN
    let animals: Array<AnimalInterface>;
    let paddock: Paddock;

    beforeEach(() => {
        animals = [
            new Animal('TigerName', 5, SpecieEnum.Equine),
            new Animal('Tigrou', 2, SpecieEnum.Equine),
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
        animals.forEach((animal) => {
            PaddockService.assignAnimal(paddock, animal)
        })

        // THEN
        expect(paddock.animals.length).toBe(2);
    });

});