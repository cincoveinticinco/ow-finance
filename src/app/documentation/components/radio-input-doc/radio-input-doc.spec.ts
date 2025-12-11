import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioInputDoc } from './radio-input-doc';

describe('RadioInputDoc', () => {
  let component: RadioInputDoc;
  let fixture: ComponentFixture<RadioInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
