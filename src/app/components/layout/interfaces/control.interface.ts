import { IControlConfig } from "./control-component.interface";
import { IEffect } from "./effect.interface";
import { IValidator } from "./validator.interface";

export interface IControl {
    id?: string;
    classes?: string;
    effects?: IEffect[];
    validators?: IValidator[];
    disabled?: boolean;
    config?: IControlConfig;
    value?: any;
}