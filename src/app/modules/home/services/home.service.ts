import { Injectable } from '@angular/core';
import { environment } from "@env/environment";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class HomeService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }
  getHomePage() {
    return this.http.get(`${this.apiUrl}/public/home`);
  }
  getActiveChallenges() {
    let params = new HttpParams();
    params = params.append('isActive', '0')
      .append('isClosed', '1')
      .append('limit', '6');
    const httpOptions = {
      params,
    };
    return this.http.get(`${this.apiUrl}/public/challenges/list`, httpOptions);
  }

}
