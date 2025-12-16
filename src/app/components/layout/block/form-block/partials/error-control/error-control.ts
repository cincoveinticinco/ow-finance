import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';
import { Message } from 'primeng/message';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-error-control',
  imports: [Message],
  templateUrl: './error-control.html',
  styleUrl: './error-control.scss',
})
export class ErrorControl implements OnInit, OnDestroy {

  destroy: Subject<boolean> = new Subject<boolean>();
  @Input() control: any;

  ref!: AbstractControl;
  errorMessage = '';

  constructor(
    private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    this.ref = (this.controlContainer.control as FormGroup).controls[this.control.name];
    this.listeningErrors();
  }

  ngOnDestroy(): void {
      this.destroy.next(true);
      this.destroy.unsubscribe();
  }

  private listeningErrors(): void {
    this.ref.statusChanges.pipe(
      takeUntil(this.destroy),
      debounceTime(400)
    ).subscribe((status: string) => {
      const ERROR_KEY = Object.keys(this.ref.errors || {})[0];
      if (status === 'INVALID') {
        this.errorMessage = this.control?.config_messages?.[ERROR_KEY] || 'ERROR';
      } else {
        this.errorMessage = '';
      }
    });
  }

}
