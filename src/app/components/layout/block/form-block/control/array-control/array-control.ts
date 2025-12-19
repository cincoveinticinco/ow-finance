import { Component, OnInit } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { ControlBlockComponentBase } from '../../../../lib/control-block-component.base';
import { IControlComponent } from '../../../../interfaces/control-component.interface';
import { IArrayControl } from './array-control.interface';
import { FormService } from '../../../../service/form/form.service';
import { IControl } from '../../../../interfaces/control.interface';
import { FormControlComponent } from '../form-control/form-control';
import { Button } from 'primeng/button';
import { LayoutCoreService } from '../../../../service/layout-core/layout-core.service';
import { isNil } from 'lodash';

@Component({
  selector: 'app-array-control',
  imports: [ReactiveFormsModule, FormControlComponent, Button],
  templateUrl: './array-control.html',
  styleUrl: './array-control.scss',
})
export class ArrayControl extends ControlBlockComponentBase implements IControlComponent {

  declare config: IArrayControl;

  constructor(
    protected override controlContainer: ControlContainer,
    protected override formService: FormService,
    protected layoutCoreService: LayoutCoreService
  ) {
    super(controlContainer, formService);
  }

  load(control: IControl): void {
    this.add(control);
  }
  
  protected addControl() {
    if (!this.control.key_block) throw {code: 'key-block-required', message: "Key block is required"}
    const controls = this.control.config?.['controls'];
    const lastControl = controls[controls.length - 1];
    if (controls.length === this.config.add_config?.limit) {
      throw {code: 'limit-was-reach-out', message: "Limit was reach out"}
    }
    if (!lastControl.key && !lastControl.name) {
      lastControl.key = 0;
      lastControl.name = '0';
      return;
    }
    const newControl = {...lastControl, key: lastControl.key + 1, name: `${lastControl.key + 1}`, value: null}
    controls.push(newControl);
  }

  protected deleteControl(key: string | number) {
    const controls = this.control.config?.['controls'];
    if (controls.length === 1) {
      const lastControl = controls[controls.length - 1];
      lastControl.key = null;
      lastControl.name = null;
      return;
    }
    const controlIndex = controls.findIndex((c: IControl) => c.key === key);
    controls.splice(controlIndex, 1);
  }

  protected isNull(value: any) {
    return isNil(value);
  }

}
