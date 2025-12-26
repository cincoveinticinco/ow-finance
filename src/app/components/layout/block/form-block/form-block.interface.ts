import { IControl } from "../../interfaces/control.interface";
import { ITextBlock } from "../text-block/text-block.interface";
import { ITitleBlock } from "../title-block/title.interface";

export interface IFormBlock {
    id: string,
    classes?: string,
    value?: string,
    // form_type: string;
    // lazy?: string;
}