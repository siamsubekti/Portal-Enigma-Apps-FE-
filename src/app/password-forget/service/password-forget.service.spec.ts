import { TestBed } from '@angular/core/testing';

import { PasswordForgetService } from './password-forget.service';

describe('PasswordForgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordForgetService = TestBed.get(PasswordForgetService);
    expect(service).toBeTruthy();
  });
});
