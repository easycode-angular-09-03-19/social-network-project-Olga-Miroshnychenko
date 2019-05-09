import {Component, Input, OnInit} from '@angular/core';
import {zip} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GlobalAuthService} from "../../../common/services/global-auth.service";
import {UserService} from "../../../common/services/user.service";
import {Followers} from "../../../../interfaces/Followers";

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  @Input() winners;
  id;
  authUserId;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private globalAuth: GlobalAuthService,
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
    this.userService.getWinners().subscribe((data) => {
      this.winners = data.winners;
    });
    zip(
      this.userService.getWinners()
    )
      .subscribe(([{ winners}]: any) => {
        this.winners = winners;
        console.log(winners);
      }, (err) => {
        console.log(err);
      });
  }
}
