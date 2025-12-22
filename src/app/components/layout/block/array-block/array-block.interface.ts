import { IControl } from "../../interfaces/control.interface";
import { IFormBlock } from "../form-block/form-block.interface";

export interface IArrayBlock extends IFormBlock {
    control_type: string;
    add_config?: IAddConfig;
    groups: IControl[];
}

interface IAddConfig {
    show_add?: boolean;
    show_index?: boolean;
    add_text?: string;
    can_remove_first?: boolean;
    limit?: number;
}