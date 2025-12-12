import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { DocInformation } from '../../../shared/doc-information/doc-information';
import FileInputConfig from './file-input-doc.config.json';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-file-input-doc',
  imports: [FileUpload, ToastModule, CommonModule, DocInformation],
  templateUrl: './file-input-doc.html',
  styleUrl: './file-input-doc.scss',
  providers: [MessageService]
})
export class FileInputDoc {

  config: any = FileInputConfig;
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
