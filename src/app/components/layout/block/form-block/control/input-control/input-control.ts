import { Component } from '@angular/core';
import { ControlBlockComponentBase } from '../../../../lib/control-block-component.base';
import { IControlComponent } from '../../../../interfaces/control-component.interface';
import { IControl } from '../../../../interfaces/control.interface';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../../service/form.service';
import { InputText } from 'primeng/inputtext';
import { Label } from '../../partials/label/label';
import { ErrorControl } from '../../partials/error-control/error-control';

@Component({
  selector: 'app-input-control',
  imports: [InputText, Label, ErrorControl, ReactiveFormsModule],
  templateUrl: './input-control.html',
  styleUrl: './input-control.scss',
})
export class InputControl extends ControlBlockComponentBase implements IControlComponent {

  declare config: any;

  constructor(
    protected override controlContainer: ControlContainer,
    protected override formService: FormService,
    // protected layoutService: LayoutCoreService
  ) {
    super(controlContainer, formService);
  }

  load(control: IControl): void {
      console.log(control)
      this.add(control);
  }

}
