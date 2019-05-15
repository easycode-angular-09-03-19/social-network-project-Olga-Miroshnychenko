import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { Followers, Users } from "../../../../../interfaces/Followers";

@Component({
  selector: 'app-profile-followings',
  templateUrl: './profile-followings.component.html',
  styleUrls: ['./profile-followings.component.css']
})
export class ProfileFollowingsComponent implements OnInit {
  users: Array<Users>;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getFollowings().subscribe((data: Followers) => {
      this.users = data.users;
    });
    }
}
