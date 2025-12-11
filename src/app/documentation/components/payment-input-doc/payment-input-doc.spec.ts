import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInputDoc } from './payment-input-doc';

describe('PaymentInputDoc', () => {
  let component: PaymentInputDoc;
  let fixture: ComponentFixture<PaymentInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
