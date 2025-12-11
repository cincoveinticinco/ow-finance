import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaDoc } from './textarea-doc';

describe('TextareaDoc', () => {
  let component: TextareaDoc;
  let fixture: ComponentFixture<TextareaDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
