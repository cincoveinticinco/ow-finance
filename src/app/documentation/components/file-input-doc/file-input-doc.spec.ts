import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInputDoc } from './file-input-doc';

describe('FileInputDoc', () => {
  let component: FileInputDoc;
  let fixture: ComponentFixture<FileInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
