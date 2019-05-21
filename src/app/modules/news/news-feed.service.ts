import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }
  getNewsFeed():Observable<any> {
      return this.http.get(`${this.apiUrl}/public/news?page=1&count=15`)
  }
}
