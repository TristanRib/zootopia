import {ZooInterface} from "../interfaces/ZooInterface";
import {PaddockInterface} from "../interfaces/PaddockInterface";
import {ZooAdapterInterface} from "../interfaces/ZooAdapterInterface";
import {ZooAdapter} from "../../server/adapters/ZooAdapter";

export class ZooService {
    private static adapter: ZooAdapterInterface = new ZooAdapter();

    static buildPaddock(zoo: ZooInterface, paddock: PaddockInterface) {
        this.adapter.addPaddock(paddock, zoo);
    }

    static destroyPaddock(zoo: ZooInterface, paddock: PaddockInterface) {
        if (paddock.animals.length === 0) {
            this.adapter.removePaddock(paddock, zoo);
        }
    }
}