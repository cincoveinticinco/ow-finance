import { Component } from '@angular/core';
import { ControlBlockComponentBase } from '../../../../lib/control-block-component.base';
import { IControlComponent } from '../../../../interfaces/control-component.interface';
import { ITextBlock } from '../../../text-block/text-block.interface';
import { ControlContainer } from '@angular/forms';
import { FormService } from '../../../../service/form/form.service';
import { IControl } from '../../../../interfaces/control.interface';
import { SafeHtmlPipe } from 'primeng/menu';

@Component({
  selector: 'app-text-control',
  imports: [SafeHtmlPipe],
  templateUrl: './text-control.html',
  styleUrl: './text-control.scss',
})
export class TextControl extends ControlBlockComponentBase implements IControlComponent {

  declare config: ITextBlock;

  constructor(
    protected override controlContainer: ControlContainer,
    protected override formService: FormService,
    // protected layoutService: LayoutCoreService
  ) {
    super(controlContainer, formService);
  }

  load(control: IControl): void {
    this.config = control.config as ITextBlock;
  }
}
