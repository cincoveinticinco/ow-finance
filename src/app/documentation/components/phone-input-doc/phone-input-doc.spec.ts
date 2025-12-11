import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInputDoc } from './phone-input-doc';

describe('PhoneInputDoc', () => {
  let component: PhoneInputDoc;
  let fixture: ComponentFixture<PhoneInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
