import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { zip } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { GlobalAuthService } from "../../../common/services/global-auth.service";
import { UserService } from "../../../common/services/user.service";
import { Winners } from "../interfaces/Winner";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  @Input() winners: Winners;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  authUserId;
  id;

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
      this.userService.getWinners(),
    )
      .subscribe(([{winners}]: any) => {
        this.winners = winners;
      }, (err) => {
        console.log(err);
      });
  }
}
