import { Subject } from "rxjs";
import { IEffect, IEffectComponent } from "../interfaces/effect.interface";
import { EffectBaseComponet } from "../lib/effect-component.base";
import { AbstractControl } from "@angular/forms";

export class DisableControlEffect extends EffectBaseComponet implements IEffectComponent {

    constructor(
        public override destroy: Subject<boolean>,
        public override effect: IEffect,
        protected override control?: AbstractControl,
        // protected layoutCoreService: LayoutCoreService
    ) {
        super(destroy, effect, control);
    }

    override init(): void {
        // effect functionality...
    }

}