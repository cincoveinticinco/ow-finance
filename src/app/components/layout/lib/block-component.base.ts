import { Component, Input, OnDestroy } from "@angular/core";
import { IBlock } from "../interfaces/block.interface";
import { IBlockConfig } from "../interfaces/block-component.interface";
import { Subject } from "rxjs";

@Component({template: ''})
export abstract class BlockComponentBase<TConfig> implements OnDestroy {
    @Input() block!: IBlock;
    config!: TConfig;

    destroy: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    ngOnDestroy(): void {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    }

    add(block: IBlock): void {
        this.block = block;
        this.config = block.config;
    }

}