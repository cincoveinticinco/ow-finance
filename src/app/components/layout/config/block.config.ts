import { InjectionToken } from "@angular/core";
import { FormBlock } from "../block/form-block/form-block";
import { BlockConfig } from "../interfaces/block-component.interface";
import { TitleBlock } from "../block/title-block/title-block";

export const BLOCK_CONFIG: BlockConfig = {
    form: FormBlock,
    title: TitleBlock
}

export const BLOCK_CONFIG_TOKEN = new InjectionToken<string>('BLOCK_CONFIG');