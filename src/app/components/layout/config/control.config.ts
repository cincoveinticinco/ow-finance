import { InjectionToken } from "@angular/core";
import { InputControl } from "../block/form-block/control/input-control/input-control";
import { ControlConfig } from "../interfaces/control-component.interface";
import { ArrayControl } from "../block/form-block/control/array-control/array-control";
import { SelectControl } from "../block/form-block/control/select-control/select-control";
import { PhoneControl } from "../block/form-block/control/phone-control/phone-control";
import { TitleControl } from "../block/form-block/control/title-control/title-control";
import { TextControl } from "../block/form-block/control/text-control/text-control";

export const CONTROL_CONFIG: ControlConfig = {
    input: InputControl,
    array: ArrayControl,
    select: SelectControl,
    phone: PhoneControl,
    title: TitleControl,
    text: TextControl,
}

export const CONTROL_CONFIG_TOKEN = new InjectionToken<string>('control_config');