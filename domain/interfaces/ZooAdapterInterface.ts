import {PaddockInterface} from "./PaddockInterface";
import {ZooInterface} from "./ZooInterface";

export interface ZooAdapterInterface {
    addPaddock(paddock: PaddockInterface, zoo: ZooInterface): void;

    removePaddock(paddock: PaddockInterface, zoo: ZooInterface): void;
}