import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './Pipes/summary.pipe';

@NgModule({
  declarations: [SummaryPipe],
  imports: [
    CommonModule
  ],
  exports:[
    SummaryPipe
  ]
})
export class SharedModule { }
