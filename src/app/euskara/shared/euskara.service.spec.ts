import { TestBed } from '@angular/core/testing';

import { EuskaraService } from './euskara.service';

describe('EuskaraService', () => {
  let service: EuskaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuskaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
