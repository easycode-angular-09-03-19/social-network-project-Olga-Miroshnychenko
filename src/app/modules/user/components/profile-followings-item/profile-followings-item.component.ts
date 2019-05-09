import { Component, OnInit ,Input} from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { CurrentUserStoreService } from "../../../../common/services/current-user-store.service";

@Component({
  selector: 'app-profile-followings-item',
  templateUrl: './profile-followings-item.component.html',
  styleUrls: ['./profile-followings-item.component.css']
})
export class ProfileFollowingsItemComponent implements OnInit {
@Input() follower;
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
      console.log('data', data);
      this.isFollowed = !this.isFollowed;
      this.currentUserStoreService.initCurrentUser();
    });
  }
}
