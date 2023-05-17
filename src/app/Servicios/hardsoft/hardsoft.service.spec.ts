import { TestBed } from '@angular/core/testing';

import { HardsoftService } from './hardsoft.service';

describe('HardsoftService', () => {
  let service: HardsoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardsoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
