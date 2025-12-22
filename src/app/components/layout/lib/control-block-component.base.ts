import { ChangeDetectorRef, Component, inject, Input, OnDestroy } from "@angular/core";
import { IControl } from "../interfaces/control.interface";
import { AbstractControl, ControlContainer, FormArray, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { FormService } from "../service/form/form.service";
import { IControlConfig } from "../interfaces/control-component.interface";

@Component({ template: '' })
export abstract class ControlBlockComponentBase implements OnDestroy {
    @Input() control!: IControl;

    config!: IControlConfig;
    form!: FormGroup;
    formContext!: AbstractControl;
    isGroup!: boolean;
    destroy: Subject<boolean> = new Subject<boolean>();

    protected cdr = inject(ChangeDetectorRef);

    constructor(
        protected controlContainer: ControlContainer,
        protected formService: FormService,
        // protected layoutService: LayoutService
    ) {}

    ngOnDestroy(): void {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    }

    protected setConfig(control: IControl): void {
        this.control = control;
        this.config = control.config!;
    }

    add(control: IControl): void {
        this.setConfig(control);
        this.form = this.controlContainer.control as FormGroup;
        // this.form = this.controlContainer.control as FormArray;
        this.formContext = this.formService.addControl(this.form, control);
        this.isGroup = this.controlContainer.control!.constructor.name == FormGroup.name;
        if (this.config?.actionSubscribe) {
            // call listen readonly
        }
    }

}