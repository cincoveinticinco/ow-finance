import { AfterViewInit, Component } from "@angular/core"
import { FormGroup } from "@angular/forms"

@Component({template: ''})
export abstract class StepBase {

    protected form!: FormGroup;

}