import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { LStorageService } from "../services/l-storage.service";

describe("AuthService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientModule],
      providers: [LStorageService, AuthService]
    })
  );

  it("should be created", () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
