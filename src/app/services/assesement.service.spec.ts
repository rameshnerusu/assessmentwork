import { TestBed } from '@angular/core/testing';

import { AssesementService } from './assesement.service';

describe('AssesementService', () => {
  let service: AssesementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssesementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
