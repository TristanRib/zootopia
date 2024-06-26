import {ZooAdapter} from "../../server/adapters/ZooAdapter";
import {ZooAdapterInterface} from "../../server/interfaces/ZooAdapterInterface";
import {Zoo} from "../classes/Zoo";
import {Paddock} from "../classes/Paddock";
import {PaddockService} from "./PaddockService";

export class ZooService {
    private static adapter: ZooAdapterInterface = new ZooAdapter();

    static buildPaddock(zoo: Zoo, paddock: Paddock) {
        this.adapter.addPaddock(zoo, paddock);
    }

    static destroyPaddock(zoo: Zoo, paddock: Paddock) {
        if (PaddockService.doesPaddockContainAnimals(paddock)) {
            this.adapter.removePaddock(zoo, paddock);
        }
    }
}