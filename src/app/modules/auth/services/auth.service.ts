import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { LoginServerAnswer } from "../interfaces/LoginServerAnswer";
import { SignUpServerAnswer } from "../interfaces/SignUpServerAnswer";
import { ResetPasswordServerAnswer } from "../interfaces/ResetPasswordServerAnswer";

@Injectable()
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) {}

  login(cred): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${this.apiUrl}/public/auth/login`, cred).pipe(
      map((res: LoginServerAnswer): LoginServerAnswer => {
        if (!res.error) {
          localStorage.setItem('sn_app_token', res.token);
        }
        return res;
      })
    );
  }
  signup(cred: any): Observable<SignUpServerAnswer> {
    return this.http.post<SignUpServerAnswer>(`${this.apiUrl}/public/auth/signup`, cred).pipe(
      map((res: SignUpServerAnswer): SignUpServerAnswer => {
        if (res.error) {
          alert('You have some problems ');
        }
        return res;
      })
    );
  }
  resetPassword(cred: any): Observable<ResetPasswordServerAnswer> {
    return this.http.post<ResetPasswordServerAnswer>(`${this.apiUrl}/public/auth/reset-password`, cred).pipe(
      map((res: ResetPasswordServerAnswer): ResetPasswordServerAnswer => {
        if (res.error) {
          alert('You have some problems with reset password ');
        }
        return res;
      })
    );
  }
}
