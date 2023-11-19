import { TestBed } from '@angular/core/testing';

import { AuthenticationClient } from './clients/authentication.client';

describe('JwtClientService', () => {
  let service: AuthenticationClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
