import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from "../components/news/news.component";
import { NewsCardComponent } from "../components/news-card/news-card.component";
import { NewsFeedRoutingModule } from "./news-feed-routing.module";
import { NewsPageComponent } from "../pages/news-page/news-page.component";


@NgModule({
  declarations: [
    NewsComponent,
    NewsCardComponent,
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule { }
