import { TestBed } from '@angular/core/testing';

import { BtwLibService } from './btw-lib.service';

describe('BtwLibService', () => {
  let service: BtwLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtwLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
