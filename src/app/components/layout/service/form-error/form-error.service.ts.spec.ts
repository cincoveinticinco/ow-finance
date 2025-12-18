import { TestBed } from '@angular/core/testing';

import { FormErrorServiceTs } from './form-error.service.ts';

describe('FormErrorServiceTs', () => {
  let service: FormErrorServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormErrorServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
