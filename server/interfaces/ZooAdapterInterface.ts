import {Zoo} from "../../domain/classes/Zoo";
import {Paddock} from "../../domain/classes/Paddock";

export interface ZooAdapterInterface {
    addPaddock(zoo: Zoo, paddock: Paddock): void;

    removePaddock(zoo: Zoo, paddock: Paddock): void;
}