import {PaddockInterface} from "./PaddockInterface";

export interface ZooInterface {
    get paddocks(): Array<PaddockInterface>;

    set paddocks(value: Array<PaddockInterface>);

    addPaddock(paddock: PaddockInterface): void;

    removePaddock(paddock: PaddockInterface): void;
}