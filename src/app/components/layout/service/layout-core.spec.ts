import { TestBed } from '@angular/core/testing';

import { LayoutCore } from './layout-core';

describe('LayoutCore', () => {
  let service: LayoutCore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutCore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
