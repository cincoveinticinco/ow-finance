import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayControl } from './array-control';

describe('ArrayControl', () => {
  let component: ArrayControl;
  let fixture: ComponentFixture<ArrayControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
