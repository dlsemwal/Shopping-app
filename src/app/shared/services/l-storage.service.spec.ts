import { TestBed } from '@angular/core/testing';

import { LStorageService } from './l-storage.service';

describe('LStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LStorageService = TestBed.get(LStorageService);
    expect(service).toBeTruthy();
  });
});
