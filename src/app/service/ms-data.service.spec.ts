import { TestBed } from '@angular/core/testing';

import { MSDataService } from './ms-data.service';

describe('MSDataService', () => {
  let service: MSDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MSDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
