import { Component } from '@angular/core';
import { Fluid } from 'primeng/fluid';
import { InputMask } from 'primeng/inputmask';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import PhoneInputConfig from './phone-input-doc.config.json';

@Component({
  selector: 'app-phone-input-doc',
  imports: [Fluid, InputMask, DocInformation, Select, FormsModule],
  templateUrl: './phone-input-doc.html',
  styleUrl: './phone-input-doc.scss',
})
export class PhoneInputDoc {

    config: any = PhoneInputConfig;

    countries: any[] | undefined;

    selectedCountry: string | undefined;

    ngOnInit() {
        this.countries = [
            { name: 'COL +57', code: 'CO' },
            { name: 'MEX +52', code: 'MX' },
            { name: 'USA +1', code: 'US' },
        ];
    }

}
