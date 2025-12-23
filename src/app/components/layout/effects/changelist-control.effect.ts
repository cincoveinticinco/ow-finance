import { Subject, takeUntil } from "rxjs";
import { IEffect, IEffectComponent } from "../interfaces/effect.interface";
import { EffectBaseComponet } from "../lib/effect-component.base";
import { AbstractControl } from "@angular/forms";
import { LayoutStorageService } from "../service/layout-storage/layout-storage.service";
import { LayoutCoreService } from "../service/layout-core/layout-core.service";

export class ChangeListControlEffect extends EffectBaseComponet implements IEffectComponent {

    constructor(
        public override destroy: Subject<boolean>,
        public override effect: IEffect,
        public override layoutCoreService: LayoutCoreService,
        public override control?: AbstractControl,
    ) {
        super(destroy, effect, layoutCoreService, control);
    }

    override init(): void {
        const params = this.effect.params;
        const targetPath: string = params![0] as string;
        const valuesPath: any[] = params![1] as any[];

        if (!targetPath || !valuesPath) return;

        const targetControl: AbstractControl = this.treeForm.get(targetPath) as AbstractControl;
        console.log(targetControl)
        // const targetControl: AbstractControl = this.layoutStorageService.get(this.treeForm.controls, targetPath) as AbstractControl;
        targetControl.valueChanges.pipe(takeUntil(this.destroy))
            .subscribe((value) => {
                if (!valuesPath.some(({value: v}) => v === value)) return;
                const options = valuesPath.find(({value: v}) => v === value).options;
                this.layoutStorageService.setKeyData({key: this.effect.key_control!, options});
            })
        console.log(targetControl)

    }

}