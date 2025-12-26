import { Component } from '@angular/core';
import { ControlBlockComponentBase } from '../../../../lib/control-block-component.base';
import { IControlComponent } from '../../../../interfaces/control-component.interface';
import { ITitleBlock } from '../../../title-block/title.interface';
import { ControlContainer } from '@angular/forms';
import { FormService } from '../../../../service/form/form.service';
import { IControl } from '../../../../interfaces/control.interface';
import { SafeHtmlPipe } from 'primeng/menu';

@Component({
  selector: 'app-title-control',
  imports: [SafeHtmlPipe],
  templateUrl: './title-control.html',
  styleUrl: './title-control.scss',
})
export class TitleControl extends ControlBlockComponentBase implements IControlComponent {

  declare config: ITitleBlock;

  constructor(
    protected override controlContainer: ControlContainer,
    protected override formService: FormService,
    // protected layoutService: LayoutCoreService
  ) {
    super(controlContainer, formService);
  }

  load(control: IControl): void {
    this.config = control.config as ITitleBlock;
  }

}
