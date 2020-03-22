import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientViewComponent } from './client-view.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [ClientViewComponent],
  exports: [
    ClientViewComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatSidenavModule,
    MatCheckboxModule,
  ]
})
export class ClientViewModule { }
