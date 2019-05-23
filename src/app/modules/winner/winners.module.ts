import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersComponent } from "./winners/winners.component";
import { WinnersItemComponent } from "./winners-item/winners-item.component";
import { WinnersRoutingModule } from "./winners-routing/winners-routing.module";
import { WinnerPageComponent } from './pages/winner-page/winner-page.component';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { ImgLoaderDirective } from "../../common/directives/img-loader.directive";
import { GalleryModule } from "@ks89/angular-modal-gallery";
@NgModule({
  declarations: [
    WinnersComponent,
    WinnersItemComponent,
    WinnerPageComponent,
    ImgLoaderDirective
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule,
    ScrollingModule,
    GalleryModule
  ]
})
export class WinnersModule { }
