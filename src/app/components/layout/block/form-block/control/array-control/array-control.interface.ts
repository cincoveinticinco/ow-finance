import { IBaseControl } from "../../../../interfaces/base-control.interface";
import { IControl } from "../../../../interfaces/control.interface";

export interface IArrayControl extends IBaseControl {
    controls?: IControl[];
    add_config?: IAddConfig;
}

export interface IAddConfig {
    show_add?: boolean;
    show_index?: boolean;
    add_text?: string;
    can_remove_first?: boolean;
    limit?: number;
}