import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBlock } from './array-block';

describe('ArrayBlock', () => {
  let component: ArrayBlock;
  let fixture: ComponentFixture<ArrayBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
