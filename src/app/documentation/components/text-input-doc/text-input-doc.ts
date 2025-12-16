import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import TextInputConfig from './text-input-doc.config.json'
import { LayoutComponent } from '../../../components/layout/lib/layout/layout';

@Component({
  selector: 'app-text-input-doc',
  imports: [InputTextModule, DocInformation],
  templateUrl: './text-input-doc.html',
  styleUrl: './text-input-doc.scss',
})
export class TextInputDoc {

  config: any = TextInputConfig;

}
