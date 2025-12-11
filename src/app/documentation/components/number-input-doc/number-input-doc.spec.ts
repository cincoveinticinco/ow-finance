import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputDoc } from './number-input-doc';

describe('NumberInputDoc', () => {
  let component: NumberInputDoc;
  let fixture: ComponentFixture<NumberInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
