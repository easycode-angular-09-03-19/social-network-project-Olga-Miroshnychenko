import { Injectable } from '@angular/core';
import { GlobalAuthService } from "../../../common/components/services/global-auth.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { Notification } from "../../../interfaces/Notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private globalAuth: GlobalAuthService,
    private http: HttpClient,
  ) {
  }
  getNotifications(): Observable<Notification[]>{
    return this.http.get<Notification[]>(`${this.apiUrl}/public/users/notification`, {
      headers: new HttpHeaders({'x-access-token':`${localStorage.getItem('sn_app_token')}`})
    });
  };
}
