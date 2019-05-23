import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../common/services/user.service";

@Component({
  selector: 'app-profile-favourites',
  templateUrl: './profile-favourites.component.html',
  styleUrls: ['./profile-favourites.component.css']
})
export class ProfileFavouritesComponent implements OnInit {
  images;
  constructor(
    private userService: UserService,
  ) { }
  
  ngOnInit() {
    this.userService.getFavourites().subscribe((data) => {
      this.images = data.images;
    });
  }
}
