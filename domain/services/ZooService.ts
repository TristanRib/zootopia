import {ZooInterface} from "../interfaces/ZooInterface";
import {PaddockInterface} from "../interfaces/PaddockInterface";
import {ZooAdapter} from "../../server/adapters/ZooAdapter";
import {ZooAdapterInterface} from "../../server/interfaces/ZooAdapterInterface";

export class ZooService {
    private static adapter: ZooAdapterInterface = new ZooAdapter();

    static buildPaddock(zoo: ZooInterface, paddock: PaddockInterface) {
        this.adapter.addPaddock(zoo, paddock);
    }

    static destroyPaddock(zoo: ZooInterface, paddock: PaddockInterface) {
        if (paddock.animals.length == 0) {
            this.adapter.removePaddock(zoo, paddock);
        }
    }
}