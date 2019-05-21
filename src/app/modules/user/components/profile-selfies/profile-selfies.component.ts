import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { Images } from "../../../../../interfaces/Images";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images;
  user;
  id;
  @Input() image;
  @Output('upload') upload = new EventEmitter();
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.userService.getImages().subscribe((data: Images) => {
      this.images = data.images;
    });
  }
  uploadPhoto(input) {
    const files = Array.from(input.files);
    this.userService.uploadPhotos(files).subscribe((data) => {
      this.messageService.add({severity: 'success', summary: 'Added photo', detail: 'successfully'});
      this.userService.getImages().subscribe((data: Images) => {
        this.images = data.images;
      });
    }, (err) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server Error' });
    });
  }
}
