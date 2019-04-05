import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  get isLogin() {
    if (localStorage.getItem('sn_app_token')) {
      return true;
    }
    return false;
  }

  constructor() {
  }
}
