import { InjectionToken } from "@angular/core";
import { FormBlock } from "../block/form-block/form-block";
import { BlockConfig } from "../interfaces/block-component.interface";
import { TitleBlock } from "../block/title-block/title-block";
import { TextBlock } from "../block/text-block/text-block";
import { ArrayBlock } from "../block/array-block/array-block";
import { InputBlock } from "../block/input-block/input-block";

export const BLOCK_CONFIG: BlockConfig = {
    section: FormBlock,
    array: ArrayBlock,
    title: TitleBlock,
    text: TextBlock,
    input: InputBlock,
}

export const BLOCK_CONFIG_TOKEN = new InjectionToken<string>('BLOCK_CONFIG');