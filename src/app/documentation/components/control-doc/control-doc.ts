import { Component } from '@angular/core';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import ControlDocConfig from './control-doc.config.json'

@Component({
  selector: 'app-control-doc',
  imports: [DocInformation],
  templateUrl: './control-doc.html',
  styleUrl: './control-doc.scss',
})
export class ControlDoc {

  protected config: any = ControlDocConfig;

}
