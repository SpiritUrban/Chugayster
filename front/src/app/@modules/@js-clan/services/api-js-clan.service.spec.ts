import { TestBed } from '@angular/core/testing';

import { ApiJsClanService } from './api-js-clan.service';

describe('ApiJsClanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiJsClanService = TestBed.get(ApiJsClanService);
    expect(service).toBeTruthy();
  });
});
