import { TestBed } from "@angular/core/testing";

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";

describe("HttpService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule]
    })
  );

  it("should be created", () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
