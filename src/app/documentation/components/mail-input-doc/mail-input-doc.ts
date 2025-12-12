import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import MailInputConfig from './mail-input-doc.config.json';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageModule } from 'primeng/message';


@Component({
  selector: 'app-mail-input-doc',
  imports: [InputText, DocInformation, ReactiveFormsModule, MessageModule],
  templateUrl: './mail-input-doc.html',
  styleUrl: './mail-input-doc.scss',
})
export class MailInputDoc {

  get email(): AbstractControl {
    return this.form.get('email')!;
  }

  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern(/([A-Z|a-z|0-9|\-!#$%&'*+_](\.){0,1})+[A-Z|a-z|0-9|\-!#$%&'*+_]\@([A-Z|a-z|0-9|\-!#$%&'*+_])+((\.){0,1}[A-Z|a-z|0-9]){1}\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2,6})?/)])
  })

  config: any = MailInputConfig;

}
