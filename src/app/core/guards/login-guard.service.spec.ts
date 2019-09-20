import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AuthService } from '../authentication/auth.service';
import { LoginGuard } from './login-guard.service';

describe("LoginGuardService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientModule],
      providers: [LoginGuard, AuthService]
    })
  );

  it("should be created", () => {
    const service: LoginGuard = TestBed.get(LoginGuard);
    expect(service).toBeTruthy();
  });
});
