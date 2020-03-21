import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerViewComponent } from './seller-view/seller-view.component';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [SellerViewComponent],
  exports: [
    SellerViewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class SellerViewModule { }
