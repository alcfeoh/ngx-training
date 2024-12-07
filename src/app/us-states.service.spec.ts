import { TestBed } from '@angular/core/testing';

import { UsStatesService } from './us-states.service';

describe('UsStatesService', () => {
  let service: UsStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
