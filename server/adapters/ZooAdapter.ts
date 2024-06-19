import {PaddockInterface} from "../../domain/interfaces/PaddockInterface";
import {ZooAdapterInterface} from "../../domain/interfaces/ZooAdapterInterface";
import {ZooInterface} from "../../domain/interfaces/ZooInterface";

export class ZooAdapter implements ZooAdapterInterface {
    addPaddock(paddock: PaddockInterface, zoo: ZooInterface): void {
        zoo.paddocks.push(paddock);
    }

    removePaddock(paddock: PaddockInterface, zoo: ZooInterface): void {
        let index = zoo.paddocks.indexOf(paddock);
        zoo.paddocks.slice(index, 1);
    }
}