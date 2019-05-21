import { Component, Input, OnInit } from '@angular/core';
import { CurrentUserStoreService } from "../../../../common/services/current-user-store.service";
import { UserService } from "../../../../common/services/user.service";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";
import { ActivatedRoute, Router } from '@angular/router';

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
  authId: string;
  id: string;
  constructor(
    private userService: UserService,
    private currentUserStoreService: CurrentUserStoreService,
    private globalAuthService:GlobalAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.isFollowed = this.currentUserStoreService.info.followings.some((elem) => elem === this.new.owner._id);
    this.id = this.route.snapshot.params.id;
    this.authId = this.globalAuthService.userId;
  }
  updateFollower() {
    this.userService.onSubscibe(this.new.owner._id).subscribe((data) => {
      this.data=data.data;
      console.log('data', data);
      this.isFollowed = !this.isFollowed;
      this.currentUserStoreService.initCurrentUser();
    });

  }
  chooseUser(): void {
    const id = this.follower.owner._id;
    this.userService.getUserById(id).subscribe((res) => {
      this.router.navigate(['users/', id]);
    })
  }

}
