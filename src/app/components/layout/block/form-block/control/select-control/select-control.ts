import { ChangeDetectionStrategy, Component, effect } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { Label } from '../../partials/label/label';
import { ErrorControl } from '../../partials/error-control/error-control';
import { MultiSelectModule } from 'primeng/multiselect';
import { ControlBlockComponentBase } from '../../../../lib/control-block-component.base';
import { IControlComponent } from '../../../../interfaces/control-component.interface';
import { FormService } from '../../../../service/form/form.service';
import { takeUntil } from 'rxjs';
import { IControl } from '../../../../interfaces/control.interface';
import { LayoutStorageService } from '../../../../service/layout-storage/layout-storage.service';
import { ISelectControl } from './select-control.interface';
import { SelectModule } from 'primeng/select';
import { LabelBehaviorDirective } from '../../../../../../directives/label-behavior.directive';

@Component({
  selector: 'app-select-control',
  imports: [ReactiveFormsModule, Label, ErrorControl, MultiSelectModule, SelectModule, LabelBehaviorDirective],
  templateUrl: './select-control.html',
  styleUrl: './select-control.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectControl extends ControlBlockComponentBase implements IControlComponent {

  declare config: ISelectControl;

  constructor(
    protected override controlContainer: ControlContainer,
    protected override formService: FormService,
    protected layoutStorageService: LayoutStorageService,
    // protected layoutService: LayoutCoreService
  ) {
    super(controlContainer, formService);
    effect(() => {
      if ( !this.layoutStorageService.changedKeyData() ) return;
      const { key, options } = this.layoutStorageService.changedKeyData()!;
      if (key === this.control.key) {
        this.config.options = options;
      }
    })
  }

  load(control: IControl): void {
      this.add(control);
  }

}
