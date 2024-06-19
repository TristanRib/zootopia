import {ZooInterface} from "../../server/interfaces/ZooInterface";
import {Paddock} from "../../server/classes/Paddock";

export class ZooService {
    public assignPaddock(zoo: ZooInterface, paddock: Paddock) {
        zoo.addPaddock(paddock);
    }

    public unassignPaddock(zoo: ZooInterface, paddock: Paddock) {
        if (zoo.paddocks.includes(paddock) && paddock.animals.length === 0) {
            zoo.removePaddock(paddock);
        }
    }
}