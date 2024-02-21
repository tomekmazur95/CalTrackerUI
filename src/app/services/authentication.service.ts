import {Injectable} from '@angular/core';
import {AuthenticationClient} from "../clients/authentication.client";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'token';

  constructor(
      private authenticationClient: AuthenticationClient,
      private router : Router
  ) { }

  public login(email: string, password: string): void {
    this.authenticationClient.login(email, password).subscribe((response) =>
    {
      localStorage.setItem(this.tokenKey, response.token);
      this.router.navigate(['/']);
    });
  }

  public register(email: string, password: string): void {
    localStorage.removeItem(this.tokenKey);
    this.authenticationClient.register(email, password).subscribe((response) =>
    {
      localStorage.setItem(this.tokenKey, response.token);
      this.router.navigate(['/']);
    });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn():boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null ;
  }
}




