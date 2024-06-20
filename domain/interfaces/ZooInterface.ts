import {PaddockInterface} from "./PaddockInterface";

export interface ZooInterface {
    get name(): string;

    set name(value: string);

    get paddocks(): Array<PaddockInterface>;

    set paddocks(value: Array<PaddockInterface>);
}