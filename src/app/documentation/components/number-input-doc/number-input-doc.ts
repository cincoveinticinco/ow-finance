import { Component } from '@angular/core';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import { InputNumber } from 'primeng/inputnumber';
import NumberInputConfig from './number-input-doc.config.json';

@Component({
  selector: 'app-number-input-doc',
  imports: [DocInformation, InputNumber],
  templateUrl: './number-input-doc.html',
  styleUrl: './number-input-doc.scss',
})
export class NumberInputDoc {

  config: any = NumberInputConfig;

}
