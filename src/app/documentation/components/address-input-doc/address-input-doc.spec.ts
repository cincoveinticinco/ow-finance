import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInputDoc } from './address-input-doc';

describe('AddressInputDoc', () => {
  let component: AddressInputDoc;
  let fixture: ComponentFixture<AddressInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
