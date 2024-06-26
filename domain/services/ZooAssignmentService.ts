import {ZooAdapter} from "../../server/adapters/ZooAdapter";
import {ForManagingZoo} from "../ports/ForManagingZoo";
import {Zoo} from "../classes/Zoo";
import {Animal} from "../classes/Animal";
import {Paddock} from "../classes/Paddock";
import {PaddockAssignmentService} from "./PaddockAssignmentService";

export class ZooAssignmentService {
    private static port: ForManagingZoo = new ZooAdapter();

    public static welcomeAnimal(zoo: Zoo, animal: Animal) {
        this.port.addAnimal(zoo, animal);
    }

    public static excludeAnimal(zoo: Zoo, animal: Animal) {
        for (let paddock of zoo.paddocks) {
            if (paddock.animals.includes(animal)) {
                PaddockAssignmentService.unassignAnimal(paddock, animal);
                break;
            }
        }
        this.port.removeAnimal(zoo, animal);
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