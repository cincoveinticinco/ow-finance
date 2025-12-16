import { InjectionToken } from "@angular/core";
import { FormBlock } from "../block/form-block/form-block";
import { BlockConfig } from "../interfaces/block-component.interface";

export const BLOCK_CONFIG: BlockConfig = {
    form: FormBlock
}

export const BLOCK_CONFIG_TOKEN = new InjectionToken<string>('BLOCK_CONFIG');