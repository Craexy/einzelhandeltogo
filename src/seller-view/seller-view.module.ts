import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerViewComponent } from './seller-view/seller-view.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SellerViewComponent],
  exports: [
    SellerViewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
})
export class SellerViewModule { }
