import { AfterViewInit, Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/lib/layout/layout';
import { ILayout } from '../../../components/layout/interfaces/layout.interface';
import { ExampleLayout } from '../../../config_temp/example_config';
import { ActionButtons } from '../../../components/shared/action-buttons/action-buttons';
import { DynamicStepBase } from '../../../lib/dynamic-step.base';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-input-doc',
  imports: [LayoutComponent, ActionButtons, ReactiveFormsModule],
  templateUrl: './radio-input-doc.html',
  styleUrl: './radio-input-doc.scss',
})
export class RadioInputDoc extends DynamicStepBase implements AfterViewInit {

  layout: ILayout = JSON.parse(JSON.stringify(ExampleLayout));

  next() {
    console.log(this.form.getRawValue())
  }

}
