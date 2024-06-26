import {ZooAdapter} from "../../server/adapters/ZooAdapter";
import {ForManagingZoo} from "../../server/ports/ForManagingZoo";
import {Zoo} from "../classes/Zoo";
import {Paddock} from "../classes/Paddock";
import {PaddockAssignmentService} from "./PaddockAssignmentService";

export class ZooBuildingService {
    private static port: ForManagingZoo = new ZooAdapter();

    public static buildPaddock(zoo: Zoo, paddock: Paddock) {
        this.port.addPaddock(zoo, paddock);
    }

    public static destroyPaddock(zoo: Zoo, paddock: Paddock) {
        if (PaddockAssignmentService.isPaddockContainingAnimals(paddock)) {
            this.port.removePaddock(zoo, paddock);
        }
    }
}