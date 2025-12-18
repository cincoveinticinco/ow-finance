import { IBaseControl } from "../../../../interfaces/base-control.interface";
import { IControl } from "../../../../interfaces/control.interface";

export interface IArrayControl extends IBaseControl {
    controls?: IControl[];
}