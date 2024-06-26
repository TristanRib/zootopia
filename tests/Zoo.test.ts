// Paddock.test.ts
import {Animal} from "../domain/classes/Animal";
import {Paddock} from "../domain/classes/Paddock";
import {Zoo} from "../domain/classes/Zoo";
import {SpecieEnum} from "../domain/enums/SpecieEnum";
import {PaddockSizeEnum} from "../domain/enums/PaddockSizeEnum";
import {ZooAssignmentService} from "../domain/services/ZooAssignmentService";
import {ZooBuildingService} from "../domain/services/ZooBuildingService";
import {createPaddockWithAnimals} from "./dummies/paddockDummies";
import {createAnimalDummy} from "./dummies/animalDummies";

describe('Zoo', () => {

    // GIVEN
    let zoo: Zoo;
    let felinePaddock: Paddock;

    beforeEach(() => {
        zoo = new Zoo('Zootopia', [], []);
        felinePaddock = new Paddock("Paddock", PaddockSizeEnum.Small, [SpecieEnum.Feline])
    });

    it('should be able to build paddocks', () => {
        // WHEN
        ZooBuildingService.buildPaddock(zoo, felinePaddock);

        // THEN
        expect(zoo.paddocks.length).toBe(1);
    });

    it('should be able to destroy paddocks', () => {
        // GIVEN
        ZooBuildingService.buildPaddock(zoo, felinePaddock);

        // WHEN
        ZooBuildingService.destroyPaddock(zoo, felinePaddock);

        // THEN
        expect(zoo.paddocks.length).toBe(0);
    });

    it('should not be able to destroy paddocks when they have animals assigned', () => {
        // GIVEN
        ZooBuildingService.buildPaddock(zoo, felinePaddock);
        ZooAssignmentService.assignAnimal(zoo, felinePaddock, new Animal('TigerName', new Date(), SpecieEnum.Feline));

        // WHEN
        ZooBuildingService.destroyPaddock(zoo, felinePaddock);

        // THEN
        expect(zoo.paddocks.length).toBe(1);
    });

    it.each(
        [
            {paddockWithTwoAnimals: createPaddockWithAnimals([SpecieEnum.Feline], 2, SpecieEnum.Feline), animalToAdd: createAnimalDummy(SpecieEnum.Feline)},
            {paddockWithTwoAnimals: createPaddockWithAnimals([SpecieEnum.Equine], 2, SpecieEnum.Equine), animalToAdd: createAnimalDummy(SpecieEnum.Equine)},
        ])
    ('should be able to receive animals from authorized species', (params) => {
        // WHEN
        ZooAssignmentService.assignAnimal(zoo, params.paddockWithTwoAnimals, params.animalToAdd)

        // THEN
        expect(params.paddockWithTwoAnimals).toBe(createPaddockWithAnimals(params.paddockWithTwoAnimals.authorizedSpecies, 3, params.animalToAdd.specie));
    });

    it.each(
        [
            {paddockWithTwoAnimals: createPaddockWithAnimals([SpecieEnum.Feline], 2, SpecieEnum.Feline), animalToAdd: createAnimalDummy(SpecieEnum.Equine)},
            {paddockWithTwoAnimals: createPaddockWithAnimals([SpecieEnum.Equine], 2, SpecieEnum.Equine), animalToAdd: createAnimalDummy(SpecieEnum.Feline)},
        ])
    ('should not be able to receive animals not in authorized species', (params) => {
        // WHEN
        ZooAssignmentService.assignAnimal(zoo, params.paddockWithTwoAnimals, params.animalToAdd);

        // THEN
        expect(params.paddockWithTwoAnimals).toBe(createPaddockWithAnimals(params.paddockWithTwoAnimals.authorizedSpecies, 3, params.animalToAdd.specie));
    });

    it('should be able to remove animals', () => {
        // GIVEN
        const paddockWithTwoAnimals = createPaddockWithAnimals([SpecieEnum.Feline], 2, SpecieEnum.Feline)
        const animal = createAnimalDummy(SpecieEnum.Feline)
        const paddockToEdit = createPaddockWithAnimals([SpecieEnum.Feline], 2, SpecieEnum.Feline)

        ZooAssignmentService.assignAnimal(zoo, paddockToEdit, animal)

        // WHEN
        ZooAssignmentService.unassignAnimal(paddockToEdit, animal);

        // THEN
        expect(paddockToEdit).toBe(paddockWithTwoAnimals);
    });
});