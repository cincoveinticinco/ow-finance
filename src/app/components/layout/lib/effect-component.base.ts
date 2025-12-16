import { AbstractControl, FormGroup } from "@angular/forms";
import { ILayout } from "../interfaces/layout.interface";
import { lastValueFrom, Subject, timer } from "rxjs";
import { IEffect } from "../interfaces/effect.interface";

export class EffectBaseComponet {
    // protected layoutStorageService: LayoutStorageService
    protected treeForm!: FormGroup;
    protected layout!: ILayout;

    constructor(
        protected destroy: Subject<boolean>,
        protected effect: IEffect,
        protected control?: AbstractControl,
        // protected layoutCoreService: LayoutCoreService
    ) {
        
    }

    init(): void {

    }

    async execute(): Promise<void> {
        try {
            await lastValueFrom(timer(0));
            this.init();
        } catch (error) {
            console.warn(error);
        }
    }

}