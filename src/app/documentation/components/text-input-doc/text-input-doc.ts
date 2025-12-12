import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import { DocConfig } from '../../../interfaces/doc-config.interface';
import TextInputConfig from './text-input-doc.config.json'

@Component({
  selector: 'app-text-input-doc',
  imports: [InputTextModule, DocInformation],
  templateUrl: './text-input-doc.html',
  styleUrl: './text-input-doc.scss',
})
export class TextInputDoc {

  config: any = TextInputConfig;

}
