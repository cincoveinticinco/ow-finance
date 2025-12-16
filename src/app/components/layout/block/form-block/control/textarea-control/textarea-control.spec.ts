import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaControl } from './textarea-control';

describe('TextareaControl', () => {
  let component: TextareaControl;
  let fixture: ComponentFixture<TextareaControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
