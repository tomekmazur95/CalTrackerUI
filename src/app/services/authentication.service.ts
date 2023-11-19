import { Injectable } from '@angular/core';
import {AuthenticationClient} from "../clients/authentication.client";
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../AuthenticationResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'token';

  constructor(
      private authenticationClient: AuthenticationClient,
      private router : Router
  ) { }

  public login(request: AuthenticationRequest): void {
    this.authenticationClient.login(request).subscribe((response) =>
    {
      localStorage.setItem(this.tokenKey, response.token);
      this.router.navigate(['/']);
    });
  }

  public register(request: AuthenticationRequest): void {
    this.authenticationClient.register(request).subscribe((response) =>
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




