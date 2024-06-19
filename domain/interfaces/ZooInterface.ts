import {Paddock} from "../../server/classes/Paddock";

export interface ZooInterface {
    get paddocks(): Array<Paddock>;

    addPaddock(paddock: Paddock): void;

    removePaddock(paddock: Paddock): void;
}