import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {SellerViewModule} from "../seller-view/seller-view.module";
import {SellerViewComponent} from "../seller-view/seller-view/seller-view.component";
import { HomeComponent } from './home/home.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { GridListComponent } from './grid-list/grid-list.component';

const appRoutes: Routes = [
  { path: 'seller/:id', component: SellerViewComponent },
  { path: 'home', component: HomeComponent},
  { path: 'client/:id', component: ClientViewComponent},
  { path: '',
  redirectTo: '/home',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SellerViewComponent,
    ClientViewComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SellerViewModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
