import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientViewComponent } from './client-view.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [ClientViewComponent],
  exports: [
    ClientViewComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class ClientViewModule { }
