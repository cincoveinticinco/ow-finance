import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import AdressInputConfig from './address-input-doc.config.json';

@Component({
  selector: 'app-address-input-doc',
  imports: [InputTextModule, FluidModule, SelectModule, DocInformation],
  templateUrl: './address-input-doc.html',
  styleUrl: './address-input-doc.scss',
})
export class AddressInputDoc {

    config: any = AdressInputConfig;
    cities: any[] | undefined;
    countries: any[] | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.countries = [
            { name: 'Colombia', code: 'RM' },
            { name: 'México', code: 'LDN' },
            { name: 'Argentina', code: 'IST' },
            { name: 'Brasil', code: 'PRS' },
            { name: 'United states', code: 'USA' },
        ];
    }

}
