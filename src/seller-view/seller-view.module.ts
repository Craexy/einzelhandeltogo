import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerViewComponent } from './seller-view/seller-view.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [SellerViewComponent],
  exports: [
    SellerViewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class SellerViewModule { }
