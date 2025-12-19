import { IControlConfig } from "./control-component.interface";
import { IEffect } from "./effect.interface";
import { IValidator } from "./validator.interface";

export interface IControl {
    name?: string;
    control_type?: string;
    form_type?: string;
    classes?: string;
    effects?: IEffect[];
    validators?: IValidator[];
    config_messages?: {[key: string]: string};
    disabled?: boolean;
    config?: IControlConfig;
    value?: any;
    idName?: string;
    key?: string | number;
}