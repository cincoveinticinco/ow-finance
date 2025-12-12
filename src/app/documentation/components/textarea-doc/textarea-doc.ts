import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import TextAreaConfig from './textarea-doc.config.json'


@Component({
  selector: 'app-textarea-doc',
  imports: [TextareaModule, DocInformation],
  templateUrl: './textarea-doc.html',
  styleUrl: './textarea-doc.scss',
})
export class TextareaDoc {

  config: any = TextAreaConfig;

}
