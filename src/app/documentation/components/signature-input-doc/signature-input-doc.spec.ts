import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureInputDoc } from './signature-input-doc';

describe('SignatureInputDoc', () => {
  let component: SignatureInputDoc;
  let fixture: ComponentFixture<SignatureInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
