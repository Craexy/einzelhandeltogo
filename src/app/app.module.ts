import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {SellerViewModule} from "../seller-view/seller-view.module";
import {SellerViewComponent} from "../seller-view/seller-view/seller-view.component";
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "../login/login.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {LoginModule} from "../login/login.module";
import {ClientViewModule} from "./client-view/client-view.module";
import { ClientViewComponent } from './client-view/client-view.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {APIInterceptor} from "../shared/HttpInterceptor";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormsModule } from '@angular/forms';
import {DriverComponent} from "../driver/driver.component";
import {DriverModule} from "../driver/driver.module";
import {ProfileComponent} from "../profile/profile.component";
import {ProfileModule} from "../profile/profile.module";


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'seller/:id', component: SellerViewComponent },
  { path: 'client/:id', component: ClientViewComponent},
  { path: 'driver/:id', component: DriverComponent},
  { path: 'profile', component: ProfileComponent},
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
    DialogBoxComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SellerViewModule,
    LoginModule,
    DriverModule,
    ProfileModule,
    BrowserAnimationsModule,
    ClientViewModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
