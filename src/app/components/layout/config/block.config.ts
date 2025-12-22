import { InjectionToken } from "@angular/core";
import { FormBlock } from "../block/form-block/form-block";
import { BlockConfig } from "../interfaces/block-component.interface";
import { TitleBlock } from "../block/title-block/title-block";
import { TextBlock } from "../block/text-block/text-block";
import { ArrayBlock } from "../block/array-block/array-block";

export const BLOCK_CONFIG: BlockConfig = {
    form: FormBlock,
    array: ArrayBlock,
    title: TitleBlock,
    text: TextBlock,
}

export const BLOCK_CONFIG_TOKEN = new InjectionToken<string>('BLOCK_CONFIG');