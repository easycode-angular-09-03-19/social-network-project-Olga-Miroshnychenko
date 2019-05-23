import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GlobalAuthService } from "../common/services/global-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private globalAuthService: GlobalAuthService,
    private router: Router
  ) {
  }

  canActivate() {
    if (!this.globalAuthService.token) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}

