import {ZooAdapter} from "../../server/adapters/ZooAdapter";
import {ZooAdapterInterface} from "../../server/interfaces/ZooAdapterInterface";
import {Zoo} from "../classes/Zoo";
import {Paddock} from "../classes/Paddock";
import {PaddockAssignmentService} from "./PaddockAssignmentService";

export class ZooBuildingService {
    private static adapter: ZooAdapterInterface = new ZooAdapter();

    public static buildPaddock(zoo: Zoo, paddock: Paddock) {
        this.adapter.addPaddock(zoo, paddock);
    }

    public static destroyPaddock(zoo: Zoo, paddock: Paddock) {
        if (PaddockAssignmentService.isPaddockContainingAnimals(paddock)) {
            this.adapter.removePaddock(zoo, paddock);
        }
    }
}