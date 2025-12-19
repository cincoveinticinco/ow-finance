import { AfterViewInit, Component } from '@angular/core';
import { ILayout } from '../../../components/layout/interfaces/layout.interface';
import { cloneDeep } from 'lodash';
import { ExampleLayout } from '../../../config_temp/example_config';
import { DynamicStepBase } from '../../../lib/dynamic-step.base';
import { LayoutComponent } from '../../../components/layout/lib/layout/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionButtons } from '../../../components/shared/action-buttons/action-buttons';

@Component({
  selector: 'app-example-doc',
  imports: [LayoutComponent, ReactiveFormsModule, ActionButtons],
  templateUrl: './example-doc.html',
  styleUrl: './example-doc.scss',
})
export class ExampleDoc extends DynamicStepBase implements AfterViewInit {

  layout: ILayout = cloneDeep(ExampleLayout)

  next() {
    console.log(this.form.getRawValue())
  }

}
