import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../User";
import {catchError, tap, throwError} from "rxjs";
import {AuthenticationResponse} from "../AuthenticationResponse";

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
    return this.http.post<AuthenticationResponse>("http://localhost:8080/api/v1/auth/authenticate", request);
  }

  public getUserCredentials(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get<User>("http://localhost:8080/users/1", {headers}).pipe(
      tap(data => console.log('User credentials:', data)),
      catchError(this.handleError)
    );
  }
}
