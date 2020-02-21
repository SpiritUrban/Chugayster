import { TestBed } from '@angular/core/testing';

import { FingerprintService } from './fingerprint.service';

describe('FingerprintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FingerprintService = TestBed.get(FingerprintService);
    expect(service).toBeTruthy();
  });
});
