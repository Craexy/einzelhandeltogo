import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsViewComponent } from './details-view.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [DetailsViewComponent],
  exports: [
    DetailsViewComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class DetailsViewModule { }
