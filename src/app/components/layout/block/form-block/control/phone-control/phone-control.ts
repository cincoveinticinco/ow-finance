import { Component, OnInit } from '@angular/core';
import { Fluid } from 'primeng/fluid';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { IControlComponent } from '../../../../interfaces/control-component.interface';
import { ControlContainer, FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { FormService } from '../../../../service/form/form.service';
import { ControlBlockComponentBase } from '../../../../lib/control-block-component.base';
import { LabelBehaviorDirective } from '../../../../../../directives/label-behavior.directive';
import { ErrorControl } from '../../partials/error-control/error-control';
import { Label } from '../../partials/label/label';
import { IPhoneControl } from './phone.interface';
import { IControl } from '../../../../interfaces/control.interface';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-phone-control',
  imports: [InputMaskModule, SelectModule, LabelBehaviorDirective, ErrorControl, Label, ɵInternalFormsSharedModule, ReactiveFormsModule, FormsModule, NgClass],
  templateUrl: './phone-control.html',
  styleUrl: './phone-control.scss',
})
export class PhoneControl extends ControlBlockComponentBase implements IControlComponent, OnInit {

  countries: any[] | undefined;

  selectedCountry: any;
  defaultMask = '(999) 999-9999';

  declare config: IPhoneControl;
  
  constructor(
    protected override controlContainer: ControlContainer,
    protected override formService: FormService,
    // protected layoutService: LayoutCoreService
  ) {
    super(controlContainer, formService);
  }

  ngOnInit() {
      this.countries = [
          { name: '+57', code: 'CO', mask: '(999) 999-9999' },
          { name: '+52', code: 'MX', mask: '(99) 9999-9999' },
          { name: '+1', code: 'US', mask: '(999) 999-9999' },
      ];
      if (this.config.default_country) {
        this.selectedCountry = this.countries.find(c => c.code === this.config.default_country);
      }
  }

  load(control: IControl): void {
    this.add(control);
  }

}
