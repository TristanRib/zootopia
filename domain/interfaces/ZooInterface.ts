import {PaddockInterface} from "./PaddockInterface";

export interface ZooInterface {
    get paddocks(): Array<PaddockInterface>;

    set paddocks(value: Array<PaddockInterface>);
}