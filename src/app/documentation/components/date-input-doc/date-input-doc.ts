import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FluidModule } from 'primeng/fluid';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import DateInputConfig from './date-input-doc.config.json';

@Component({
  selector: 'app-date-input-doc',
  imports: [DatePickerModule, FluidModule, DocInformation],
  templateUrl: './date-input-doc.html',
  styleUrl: './date-input-doc.scss',
})
export class DateInputDoc {

  config: any = DateInputConfig;

}
