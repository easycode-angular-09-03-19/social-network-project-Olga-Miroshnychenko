import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersComponent } from "./winners/winners.component";
import { WinnersItemComponent } from "./winners-item/winners-item.component";
import { WinnersRoutingModule } from "./winners-routing/winners-routing.module";


@NgModule({
  declarations: [
    WinnersComponent,
    WinnersItemComponent
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule
  ]
})
export class WinnersModule { }
