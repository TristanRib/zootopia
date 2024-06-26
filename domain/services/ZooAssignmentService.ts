import {ZooAdapter} from "../../server/adapters/ZooAdapter";
import {ZooAdapterInterface} from "../../server/interfaces/ZooAdapterInterface";
import {Zoo} from "../classes/Zoo";
import {Animal} from "../classes/Animal";
import {Paddock} from "../classes/Paddock";
import {PaddockAssignmentService} from "./PaddockAssignmentService";

export class ZooAssignmentService {
    private static adapter: ZooAdapterInterface = new ZooAdapter();

    public static welcomeAnimal(zoo: Zoo, animal: Animal) {
        this.adapter.addAnimal(zoo, animal);
    }

    public static excludeAnimal(zoo: Zoo, animal: Animal) {
        zoo.paddocks.forEach((paddock: Paddock) => {
            if (paddock.animals.includes(animal)) {
                PaddockAssignmentService.unassignAnimal(paddock, animal);
            }
        })
        this.adapter.removeAnimal(zoo, animal);
    }

    public static assignAnimal(zoo: Zoo, paddock: Paddock, animal: Animal) {
        if (!this.isZooContainingAnimal(zoo, animal)) {
            this.welcomeAnimal(zoo, animal);
        }
        PaddockAssignmentService.assignAnimal(paddock, animal);
    }

    public static unassignAnimal(paddock: Paddock, animal: Animal) {
        PaddockAssignmentService.unassignAnimal(paddock, animal);
    }

    private static isZooContainingAnimal(zoo: Zoo, animal: Animal) {
        return zoo.animals.includes(animal);
    }
}