import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from "@angular/router";
import { NotificationComponent } from "./components/notification/notification.component";
import { MatListModule } from "@angular/material";
import { NotificationItemComponent } from "./components/notification-item/notification-item.component";


@NgModule({
  declarations: [
    NavbarComponent,
    NotificationComponent,
    NotificationItemComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
