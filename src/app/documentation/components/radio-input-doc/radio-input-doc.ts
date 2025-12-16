import { Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/lib/layout/layout';
import { ILayout } from '../../../components/layout/interfaces/layout.interface';
import { ExampleLayout } from '../../../config_temp/example_config';

@Component({
  selector: 'app-radio-input-doc',
  imports: [LayoutComponent],
  templateUrl: './radio-input-doc.html',
  styleUrl: './radio-input-doc.scss',
})
export class RadioInputDoc {

  layout: ILayout = JSON.parse(JSON.stringify(ExampleLayout));

}
