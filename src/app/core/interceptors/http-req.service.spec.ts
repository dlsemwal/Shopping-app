import { TestBed } from "@angular/core/testing";

import { HttpReqIntercepter } from "./http-req.service";
import { MatDialogModule } from "@angular/material/dialog";

describe("HttpReqService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [MatDialogModule]
    })
  );

  it("should be created", () => {
    const service: HttpReqIntercepter = TestBed.get(HttpReqIntercepter);
    expect(service).toBeTruthy();
  });
});
