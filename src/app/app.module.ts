import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { NavbarModule} from "./modules/navbar/navbar.module";
import { MatToolbarModule } from "@angular/material";
// import { NewsPageComponent } from './modules/news/pages/news-page/news-page.component';
// import { NewsComponent } from "./modules/news/components/news/news.component";
// import { NewsCardComponent } from './modules/news/components/news-card/news-card.component';


@NgModule({
  declarations: [
    AppComponent,
    // NewsPageComponent,
    // NewsComponent,
    // NewsCardComponent,
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
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
