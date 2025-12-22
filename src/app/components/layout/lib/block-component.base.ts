import { Component, inject, Input, OnDestroy } from "@angular/core";
import { IBlock } from "../interfaces/block.interface";
import { IBlockConfig } from "../interfaces/block-component.interface";
import { Subject } from "rxjs";
import { ControlContainer, FormGroup } from "@angular/forms";
import { FormService } from "../service/form/form.service";
import { IControl } from "../interfaces/control.interface";

@Component({template: ''})
export abstract class BlockComponentBase<TConfig> implements OnDestroy {
    @Input() block!: IBlock;
    @Input() config!: TConfig;
    parentForm!: FormGroup;
    form!: FormGroup;
    destroy: Subject<boolean> = new Subject<boolean>();

    protected controlContainer = inject(ControlContainer);
    protected formService = inject(FormService);

    constructor() {}

    ngOnDestroy(): void {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    }

    add(block: IBlock): void {
        this.block = block;
        this.config = block.config;
    }


    addChildForm(): void {
        this.form = this.formService.addControl(this.parentForm, this.config as IControl) as FormGroup;
    }

}