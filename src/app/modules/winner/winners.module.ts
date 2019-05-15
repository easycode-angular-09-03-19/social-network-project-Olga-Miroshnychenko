import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersComponent } from "./winners/winners.component";
import { WinnersItemComponent } from "./winners-item/winners-item.component";
import { WinnersRoutingModule } from "./winners-routing/winners-routing.module";
import { WinnerModalWindowComponent } from './winner-modal-window/winner-modal-window.component';
import { WinnerPageComponent } from './pages/winner-page/winner-page.component';
import { ScrollDispatchModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    WinnersComponent,
    WinnersItemComponent,
    WinnerModalWindowComponent,
    WinnerPageComponent,
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule,
    ScrollDispatchModule
  ]
})
export class WinnersModule { }
