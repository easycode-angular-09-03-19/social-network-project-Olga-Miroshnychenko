import { Component, Input, OnInit } from '@angular/core';
import { CurrentUserStoreService } from "../../../../common/services/current-user-store.service";
import { UserService } from "../../../../common/services/user.service";
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() new;
  @Input() follower;
  @Input() picture;
  data;
  isFollowed=true;
  constructor(
    private userService: UserService,
    private currentUserStoreService: CurrentUserStoreService
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.isFollowed = this.currentUserStoreService.info.followings.some((elem) => elem === this.follower._id);
  }
  updateFollower() {
    this.userService.onSubscibe(this.follower._id).subscribe((data) => {
      this.data=data.data;
      this.isFollowed = !this.isFollowed;
      this.currentUserStoreService.initCurrentUser();
    });

  }
}
