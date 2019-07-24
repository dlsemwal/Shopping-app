import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './camera.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: CameraComponent },
  { path: ':id', component:  DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraRoutingModule { }
