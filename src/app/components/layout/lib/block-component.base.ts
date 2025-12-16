import { Component, Input, OnDestroy } from "@angular/core";
import { IBlock } from "../interfaces/block.interface";
import { IBlockConfig } from "../interfaces/block-component.interface";
import { Subject } from "rxjs";
import { IFormBlock } from "../block/form-block/form-block.interface";

@Component({template: ''})
export abstract class BlockComponentBase implements OnDestroy {
    @Input() block!: IBlock;
    config!: IFormBlock;

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