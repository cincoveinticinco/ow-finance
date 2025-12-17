import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDoc } from './control-doc';

describe('ControlDoc', () => {
  let component: ControlDoc;
  let fixture: ComponentFixture<ControlDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
