import { IControl } from "../../interfaces/control.interface";
import { ITextBlock } from "../text-block/text-block.interface";
import { ITitleBlock } from "../title-block/title.interface";

export interface IFormBlock {
    name: string,
    form_type: string;
    controls: IControl[];
    title?: ITitleBlock,
    parragraph?: ITextBlock;
    // lazy?: string;
}