import { Component, OnInit } from '@angular/core';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import { MultiSelectModule } from 'primeng/multiselect';
import SelectInputConfig from './select-input-doc.config.json'

@Component({
  selector: 'app-select-input-doc',
  imports: [DocInformation, MultiSelectModule],
  templateUrl: './select-input-doc.html',
  styleUrl: './select-input-doc.scss',
})
export class SelectInputDoc implements OnInit {

  config: any = SelectInputConfig;

  cities!: any[];

  selectedCities!: any[];

  ngOnInit() {
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }

}
