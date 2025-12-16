import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-control',
  imports: [],
  templateUrl: './error-control.html',
  styleUrl: './error-control.scss',
})
export class ErrorControl {

  @Input() config: any;

}
