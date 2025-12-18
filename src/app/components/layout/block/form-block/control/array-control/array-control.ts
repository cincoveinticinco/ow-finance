import { Component, OnInit } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { ControlBlockComponentBase } from '../../../../lib/control-block-component.base';
import { IControlComponent } from '../../../../interfaces/control-component.interface';
import { IArrayControl } from './array-control.interface';
import { FormService } from '../../../../service/form/form.service';
import { IControl } from '../../../../interfaces/control.interface';
import { FormControlComponent } from '../form-control/form-control';
import { ControlBlock } from '../control-block/control-block';

@Component({
  selector: 'app-array-control',
  imports: [ReactiveFormsModule, FormControlComponent],
  templateUrl: './array-control.html',
  styleUrl: './array-control.scss',
})
export class ArrayControl extends ControlBlockComponentBase implements IControlComponent {

  declare config: IArrayControl;

  constructor(
    protected override controlContainer: ControlContainer,
    protected override formService: FormService,
  ) {
    super(controlContainer, formService);
  }

  load(control: IControl): void {
    this.add(control);
  }

}
