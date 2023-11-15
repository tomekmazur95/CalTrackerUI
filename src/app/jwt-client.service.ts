import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../User";
import {catchError, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
  constructor(private http: HttpClient) {
  }

  public generateToken(request) {
    return this.http.post("http://localhost:8080/api/v1/auth/authenticate", request, {responseType: 'text' as 'json'});
  }

  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get("http://localhost:8080/welcome", {headers, responseType: 'text' as 'json'})
  }

  public getUserCredentials(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get<User>("http://localhost:8080/users/1", {headers, responseType: 'text' as 'json'}).pipe(
      tap(data => console.log('User credentials:', data)),
      catchError(this.handleError)
    );
  }
}
