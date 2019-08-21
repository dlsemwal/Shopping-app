import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ErrorDialogService } from './error-dialog.service';

@NgModule({
    imports: [

    ],
    declarations: [
        ErrorDialogComponent
    ],
    exports: [
        ErrorDialogComponent,
    ],
    providers: [
        ErrorDialogService
    ]
})

export class ErrorDialogModule {

}