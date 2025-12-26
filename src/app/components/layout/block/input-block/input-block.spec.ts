import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBlock } from './input-block';

describe('InputBlock', () => {
  let component: InputBlock;
  let fixture: ComponentFixture<InputBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
