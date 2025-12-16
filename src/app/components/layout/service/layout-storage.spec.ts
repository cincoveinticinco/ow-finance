import { TestBed } from '@angular/core/testing';

import { LayoutStorage } from './layout-storage';

describe('LayoutStorage', () => {
  let service: LayoutStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
