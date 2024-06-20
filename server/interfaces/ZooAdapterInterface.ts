import {PaddockInterface} from "../../domain/interfaces/PaddockInterface";
import {ZooInterface} from "../../domain/interfaces/ZooInterface";

export interface ZooAdapterInterface {
    addPaddock(zoo: ZooInterface, paddock: PaddockInterface): void;

    removePaddock(zoo: ZooInterface, paddock: PaddockInterface): void;
}