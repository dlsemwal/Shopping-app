import { TestBed } from '@angular/core/testing';

import { HttpReqIntercepter } from './http-req.service';

describe('HttpReqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpReqIntercepter = TestBed.get(HttpReqIntercepter);
    expect(service).toBeTruthy();
  });
});
