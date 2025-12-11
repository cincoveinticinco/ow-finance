import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailInputDoc } from './mail-input-doc';

describe('MailInputDoc', () => {
  let component: MailInputDoc;
  let fixture: ComponentFixture<MailInputDoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailInputDoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailInputDoc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
