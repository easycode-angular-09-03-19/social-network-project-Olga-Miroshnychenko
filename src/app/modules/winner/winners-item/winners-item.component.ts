import { Component, OnInit,Input } from '@angular/core';
import { UserService } from "../../../common/services/user.service";
import { MessageService } from "primeng/api";
import { ServerAnswer } from "../../auth/interfaces/ServerAnswer";

@Component({
  selector: 'app-winners-item',
  templateUrl: './winners-item.component.html',
  styleUrls: ['./winners-item.component.css']
})
export class WinnersItemComponent implements OnInit {
@Input() winner;
@Input() info;

  constructor(
    private messageService: MessageService,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }
  onLikePicture(winner) {
    this.userService
      .likePicture(winner.member_id.images[0].image_basic._id)
      .subscribe(
        (res: ServerAnswer) => {
          if (!res.error) {
            winner.isLiked = !winner.isLiked;
            if (res.message === "Image was liked.") {
              winner.member_id.images[0].image_basic.likes.length++;
            } else {
              winner.member_id.images[0].image_basic.likes.length--;
            }
          }
        },
        err => {
          console.log(err);
        }
      );
  }
}

