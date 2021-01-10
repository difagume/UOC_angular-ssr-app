import { TestBed } from '@angular/core/testing';

import { FinalSpaceService } from './finalspace.service';

describe('FinalSpaceService', () => {
  let service: FinalSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
