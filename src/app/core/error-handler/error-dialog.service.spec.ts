import { TestBed } from "@angular/core/testing";

import { ErrorDialogService } from "./error-dialog.service";
import { SharedModule } from "src/app/shared/shared.module";
import { MatDialogModule } from "@angular/material/dialog";

describe("ErrorDialogService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [MatDialogModule]
    })
  );

  it("should be created", () => {
    const service: ErrorDialogService = TestBed.get(ErrorDialogService);
    expect(service).toBeTruthy();
  });
});
