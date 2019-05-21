import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from "../../news-feed.service";
import { zip } from "rxjs";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  news;
  constructor(
    private newsFeedService: NewsFeedService,
  ) { }

  ngOnInit() {
    zip(
      this.newsFeedService.getNewsFeed(),
    )
      .subscribe(([{news}]: any) => {
        this.news = news;
      }, (err) => {
        console.log(err);
      });
  }
}
