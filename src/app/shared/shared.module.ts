import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddFormComponent } from './components/add-form/add-form.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { SummaryPipe } from './Pipes/summary.pipe';

@NgModule({
  declarations: [
    SummaryPipe,
    LoginComponent,
    DropdownComponent,
    AddFormComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: AddFormComponent }]),
    ReactiveFormsModule
  ],
  exports: [
    SummaryPipe,
    LoginComponent,
    DropdownComponent,
    AddFormComponent,
    ProductComponent
  ]
})
export class SharedModule {}
