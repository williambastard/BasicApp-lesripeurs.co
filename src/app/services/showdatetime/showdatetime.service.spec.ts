import { TestBed } from '@angular/core/testing';

import { ShowDateTimeService } from './showdatetime.service';

describe('ShowdatetimeService', () => {
  let service: ShowDateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
