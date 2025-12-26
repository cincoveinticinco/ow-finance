import { IControl } from "../../../../interfaces/control.interface";

export interface ILabel extends IControl {
    label?: string;
    helpText?: string;
    placeholder?: string;
}