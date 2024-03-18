import { TestBed } from '@angular/core/testing';

import { LoginEtatService } from './login-etat.service';

describe('LoginEtatService', () => {
  let service: LoginEtatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginEtatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
