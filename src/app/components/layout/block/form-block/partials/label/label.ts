import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.html',
  styleUrl: './label.scss',
})
export class Label {

  @Input() config: any;

}
