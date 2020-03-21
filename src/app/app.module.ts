import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SellerViewModule} from "../seller-view/seller-view.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SellerViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
