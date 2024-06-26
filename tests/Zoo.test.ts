// Paddock.test.ts
import {PaddockService} from "../domain/services/PaddockService";
import {Paddock} from "../domain/classes/Paddock";
import {SpecieEnum} from "../domain/enums/SpecieEnum";
import {Animal} from "../domain/classes/Animal";
import {Zoo} from "../domain/classes/Zoo";
import {ZooService} from "../domain/services/ZooService";
import {ZooInterface} from "../domain/interfaces/ZooInterface";
import {PaddockSizeEnum} from "../domain/enums/PaddockSizeEnum";
import {PaddockInterface} from "../domain/interfaces/PaddockInterface";

describe('Zoo', () => {

    // GIVEN
    let zoo: ZooInterface;
    let paddock: PaddockInterface;

    beforeEach(() => {
        zoo = new Zoo('Zootopia', []);
        paddock = new Paddock('Southern Paddock', PaddockSizeEnum.Small, [SpecieEnum.Feline], []);
    });

    it('should be able to build paddocks', () => {
        // WHEN
        ZooService.buildPaddock(zoo, paddock);

        // THEN
        expect(zoo.paddocks.length).toBe(1);
    });

    it('should be able to destroy paddocks', () => {
        // GIVEN
        ZooService.buildPaddock(zoo, paddock);

        // WHEN
        ZooService.destroyPaddock(zoo, paddock);

        // THEN
        expect(zoo.paddocks.length).toBe(0);
    });

    it('should not be able to destroy paddocks when they have animals assigned', () => {
        // GIVEN
        ZooService.buildPaddock(zoo, paddock);
        PaddockService.assignAnimal(paddock, new Animal('TigerName', 5, SpecieEnum.Feline));

        // WHEN
        ZooService.destroyPaddock(zoo, paddock);

        // THEN
        expect(zoo.paddocks.length).toBe(1);
    });
});