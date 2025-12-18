import { Component, Input } from '@angular/core';
import { ILabel } from './label.interface';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.html',
  styleUrl: './label.scss',
})
export class Label {

  @Input() config?: ILabel;
  @Input() control: any;

}
