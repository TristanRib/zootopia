import {PaddockInterface} from "../../domain/interfaces/PaddockInterface";
import {ZooAdapterInterface} from "../interfaces/ZooAdapterInterface";
import {ZooInterface} from "../../domain/interfaces/ZooInterface";

export class ZooAdapter implements ZooAdapterInterface {
    addPaddock(zoo: ZooInterface, paddock: PaddockInterface): void {
        zoo.paddocks.push(paddock);
    }

    removePaddock(zoo: ZooInterface, paddock: PaddockInterface): void {
        let index = zoo.paddocks.indexOf(paddock);
        if (index >= 0) {
            zoo.paddocks.splice(index, 1);
        }
    }
}