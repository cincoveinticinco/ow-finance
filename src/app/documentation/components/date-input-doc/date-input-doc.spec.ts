import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputDoc } from './date-input-doc';

describe('DateInputDoc', () => {
  let component: DateInputDoc;
  let fixture: ComponentFixture<DateInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
