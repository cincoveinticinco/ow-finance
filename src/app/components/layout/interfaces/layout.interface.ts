import { IBlock } from "./block.interface";
import { IEffect } from "./effect.interface";

export interface ILayout {
    title?: string;
    blocks?: IBlock[];
    effects?: IEffect[];
    // action_config?
}