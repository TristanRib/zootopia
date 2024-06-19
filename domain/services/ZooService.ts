import {ZooInterface} from "../interfaces/ZooInterface";
import {Paddock} from "../../server/classes/Paddock";

export class ZooService {
    public buildPaddock(zoo: ZooInterface, paddock: Paddock) {
        zoo.addPaddock(paddock);
    }

    public destroyPaddock(zoo: ZooInterface, paddock: Paddock) {
        if (zoo.paddocks.includes(paddock) && paddock.animals.length === 0) {
            zoo.removePaddock(paddock);
        }
    }
}