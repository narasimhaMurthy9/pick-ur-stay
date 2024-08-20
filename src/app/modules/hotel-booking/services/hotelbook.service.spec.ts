import { TestBed } from '@angular/core/testing';

import { HotelbookService } from './hotelbook.service';

describe('HotelbookService', () => {
  let service: HotelbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
