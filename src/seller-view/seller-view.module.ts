import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerViewComponent } from './seller-view/seller-view.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table"

@NgModule({
  declarations: [SellerViewComponent],
  exports: [
    SellerViewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule
  ]
})
export class SellerViewModule { }
