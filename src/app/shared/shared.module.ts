import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './Pipes/summary.pipe';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RouterModule } from '@angular/router';
import { AddFormComponent } from './components/add-form/add-form.component';

@NgModule({
  declarations: [SummaryPipe, LoginComponent, DropdownComponent, AddFormComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AddFormComponent }
    ]),
    ReactiveFormsModule
  ],
  exports: [
    SummaryPipe,
    LoginComponent,
    DropdownComponent,
    AddFormComponent
  ]
})
export class SharedModule { }
