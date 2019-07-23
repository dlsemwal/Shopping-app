import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraRoutingModule } from './camera-routing.module';
import { CameraComponent } from './camera.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CameraComponent, DetailsComponent],
  imports: [
    CommonModule,
    CameraRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class CameraModule { }
