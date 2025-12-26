import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleControl } from './title-control';

describe('TitleControl', () => {
  let component: TitleControl;
  let fixture: ComponentFixture<TitleControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
