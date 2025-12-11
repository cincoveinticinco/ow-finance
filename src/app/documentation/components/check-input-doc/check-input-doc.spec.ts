import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInputDoc } from './check-input-doc';

describe('CheckInputDoc', () => {
  let component: CheckInputDoc;
  let fixture: ComponentFixture<CheckInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
