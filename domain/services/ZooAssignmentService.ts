import {ZooAdapter} from "../../server/adapters/ZooAdapter";
import {ZooAdapterInterface} from "../../server/interfaces/ZooAdapterInterface";
import {Zoo} from "../classes/Zoo";
import {Animal} from "../classes/Animal";

export class ZooAssignmentService {
    private static adapter: ZooAdapterInterface = new ZooAdapter();

    static assignAnimal(zoo: Zoo, animal: Animal) {
        this.adapter.addAnimal(zoo, animal);
    }

    static unassignAnimal(zoo: Zoo, animal: Animal) {
        this.adapter.removeAnimal(zoo, animal);
    }
}