import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TokenInterceptors } from "./interceptors/token.interceptors";
import { NavbarModule } from "./modules/navbar/navbar.module";
import { MatToolbarModule } from "@angular/material";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    NavbarModule,
    MatToolbarModule

  ],
  providers: [MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptors,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
