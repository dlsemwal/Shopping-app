import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  constructor(public dialog: MatDialog) { }
  openDialog(data): void {
    const dialogRef = this.dialog.open(
      ErrorDialogComponent,
      {
        width: '300px',
        data: data
      }
    );

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
