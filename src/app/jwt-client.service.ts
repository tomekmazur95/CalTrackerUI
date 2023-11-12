import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

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
    return this.http.get("http://localhost:8080/users/1", {headers, responseType: 'text' as 'json'});
  }
}
