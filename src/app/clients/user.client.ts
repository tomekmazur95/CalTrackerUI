import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../../User";
import {Observable} from "rxjs";
import {UserInfoResponse} from "../../AuthenticationResponse";

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

  createUserCredentials(userInfoId: number, requestBody) {
    return this.http.post<User>(`http://localhost:8080/users/${userInfoId}`, requestBody);
  }

  editUserCredentials(userId: number, requestBody) {
    return this.http.put<User>(`http://localhost:8080/users/${userId}` , requestBody)
  }
}
