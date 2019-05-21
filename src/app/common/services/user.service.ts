import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { GlobalAuthService } from "./global-auth.service";
import { CurrentUserStoreService } from "./current-user-store.service";
import { map } from "rxjs/operators";
import { Winners } from "../../modules/winner/interfaces/Winner";
import { ServerAnswer } from "../../modules/auth/interfaces/ServerAnswer";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService,
    private currentUser: CurrentUserStoreService
  ) { }
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/public/users/get-info/${id}`).pipe(
      map((user: any) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    );
  }
  uploadCover(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('coverImg', file);
    const id = this.globalAuth.userId;
    return this.http.post(`${this.apiUrl}/public/users/upload-cover/${id}`, formData);
  }
  uploadPhotos(files: any[]): Observable<any> {
    const formData = new FormData();
    files.forEach((file) => formData.append('userPhotos', file));
     const id = this.globalAuth.userId;
    return this.http.post(`${this.apiUrl}/public/users/upload-photos/${id}`, formData);
  }
  getImages(): Observable<any>{
    const id = this.globalAuth.userId;
     return this.http.get(`${this.apiUrl}/public/users/my-images/${id}`);
  }
  getFavourites(): Observable<any> {
    const id = this.globalAuth.userId;
    return this.http.get(`${this.apiUrl}/public/users/my-favorites/${id}?part=1&limit=20`).pipe(
      map((user: any) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    );
  }
  getFollowers():Observable<any> {
    const id = this.globalAuth.userId;
    return this.http.get(`${this.apiUrl}/public/users/my-followers-followings/${id}?part=1&limit=6&path=followings`).pipe(
      map((user: any) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    );
  }
  getFollowings():Observable<any> {
    const id = this.globalAuth.userId;
    return this.http.get(`${this.apiUrl}/public/users/my-followers-followings/${id}?part=1&limit=6&path=followers`).pipe(
      map((user: any) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    );
  }
  onSubscibe(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/public/users/following/${id}`, {})
  }
  getWinners(part: number = 1, limit: number = 0): Observable<Winners> {
    const params = new HttpParams()
      .set('part', `${part}`)
      .set('limit', `${limit}`);
    return this.http.get<Winners>(`${this.apiUrl}/public/winners`, { params });
  }
  likePicture(pictureId: string): Observable<ServerAnswer> {
    return this.http.put<ServerAnswer>(
      `${this.apiUrl}/public/users/like-photo/${pictureId}`,
      {}
    );
  }

}
