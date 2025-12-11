import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputDoc } from './select-input-doc';

describe('SelectInputDoc', () => {
  let component: SelectInputDoc;
  let fixture: ComponentFixture<SelectInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
