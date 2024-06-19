import {ZooInterface} from "../interfaces/ZooInterface";
import {PaddockInterface} from "../interfaces/PaddockInterface";

export class ZooService {
    public buildPaddock(zoo: ZooInterface, paddock: PaddockInterface) {
        zoo.addPaddock(paddock);
    }

    public destroyPaddock(zoo: ZooInterface, paddock: PaddockInterface) {
        if (zoo.paddocks.includes(paddock) && paddock.animals.length === 0) {
            zoo.removePaddock(paddock);
        }
    }
}