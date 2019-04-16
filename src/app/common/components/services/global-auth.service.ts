import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  constructor() { }
  public static get token(): string {
    return localStorage.getItem('sn_app_token') || '';
  }
}
