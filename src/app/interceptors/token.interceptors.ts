import { HttpInterceptor ,HttpHandler ,HttpRequest,HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { GlobalAuthService } from "../common/components/services/global-auth.service";
import { map } from "rxjs/operators";

@Injectable()
export class  TokenInterceptors implements  HttpInterceptor {
constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    req = req.clone( {
      setHeaders: {
        'x-access-token': `${GlobalAuthService.token}`
      }
    });
    return next.handle(req).pipe(
      map( (event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}
