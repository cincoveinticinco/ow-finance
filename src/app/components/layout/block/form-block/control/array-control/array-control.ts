import { Component } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlBlockComponentBase } from '../../../../lib/control-block-component.base';
import { IControlComponent } from '../../../../interfaces/control-component.interface';
import { FormService } from '../../../../service/form/form.service';
import { IControl } from '../../../../interfaces/control.interface';
import { FormControlComponent } from '../form-control/form-control';
import { Button } from 'primeng/button';
import { LayoutCoreService } from '../../../../service/layout-core/layout-core.service';
import { isNil } from 'lodash';
import { IArrayBlock } from '../../../array-block/array-block.interface';

@Component({
  selector: 'app-array-control',
  imports: [ReactiveFormsModule, FormControlComponent, Button],
  templateUrl: './array-control.html',
  styleUrl: './array-control.scss',
})
export class ArrayControl extends ControlBlockComponentBase implements IControlComponent {

  declare control: IArrayBlock;

  constructor(
    protected override controlContainer: ControlContainer,
    protected override formService: FormService,
    protected layoutCoreService: LayoutCoreService
  ) {
    super(controlContainer, formService);
  }

  load(control: IControl): void {
    this.control = control as IArrayBlock;
    this.form = this.controlContainer.control as FormGroup;
    for (const c of this.control.groups) {
      this.add(c);
    }
  }

  override add(control: IControl) {
    this.form = this.controlContainer.control as FormGroup;
    this.formContext = this.formService.addControl(this.form, control);
  }
  
  protected addControl() {
    const controls = this.control?.['groups'];
    const lastControl = controls[controls.length - 1];
    if (controls.length === this.control.add_config?.limit) {
      throw {code: 'limit-was-reach-out', message: "Limit was reach out"}
    }
    if (!lastControl.key && !lastControl.field_id) {
      lastControl.key = 0;
      lastControl.field_id = '0';
      this.add(lastControl);
      this.cdr.detectChanges();
      return;
    }
    const newControl = {...lastControl, key: +lastControl.key! + 1, name: `${+lastControl.key! + 1}`, value: null}
    this.add(newControl);
    controls.push(newControl);
  }

  protected deleteControl(key: string | number) {
    const controls = this.control?.['groups'];
    if (controls.length === 1) {
      const lastControl = controls[controls.length - 1];
      lastControl.key = undefined;
      lastControl.field_id = undefined;
      return;
    }
    const controlIndex = controls.findIndex((c: IControl) => c.key === key);
    controls.splice(controlIndex, 1);
  }

  protected isNull(value: any) {
    return isNil(value);
  }

}
