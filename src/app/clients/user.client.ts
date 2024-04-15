import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RequestUserActivityDTO, ResponseUserActivityDTO, User, UserInfoResponse} from "../shared/modules";

@Injectable({
  providedIn: 'root',
})
export class UserClient {
  constructor(private http: HttpClient) {}
  getUserCredentials(userInfoId: number): Observable<User> {
        return this.http.get<User>(`http://localhost:8080/users/userInfo?id=${userInfoId}`);
    }
  getUserInfo() {
    return this.http.get<UserInfoResponse>('http://localhost:8080/userInfo');
  }

  createUserCredentials(userInfoId: number, requestBody: User) {
    return this.http.post<User>(`http://localhost:8080/users/${userInfoId}`, requestBody);
  }

  editUserCredentials(userId: number, requestBody: User) {
    return this.http.put<User>(`http://localhost:8080/users/${userId}`, requestBody);
  }

  editUserActivity(userId: number, requestBody: RequestUserActivityDTO) {
    return this.http.patch<ResponseUserActivityDTO>(`http://localhost:8080/users/${userId}`, requestBody);
  }
}
