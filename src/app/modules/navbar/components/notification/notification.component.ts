import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from "../notification.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notifications;
  isNotificationShowed = false;
  constructor(
    private notifcationService: NotificationService,
  ) { }

  ngOnInit() {
    this.notifcationService.getNotifications().subscribe((data) => {
      this.notifications = data;
    });
  }
  showNotification() {
    this.isNotificationShowed = !this.isNotificationShowed;
  }

}
