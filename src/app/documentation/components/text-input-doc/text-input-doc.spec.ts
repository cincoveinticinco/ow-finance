import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputDoc } from './text-input-doc';

describe('TextInputDoc', () => {
  let component: TextInputDoc;
  let fixture: ComponentFixture<TextInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
