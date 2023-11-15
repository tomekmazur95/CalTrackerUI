import {Component, OnInit} from '@angular/core';
import {JwtClientService} from "../jwt-client.service";
import {User} from "../../User";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent implements OnInit {

  response:any;
  usersCredentials: User;
  authRequest: any = {
    "email": "tomek.mazur95@gmail.com",
    "password": "password123"
  };

  constructor(
    private service: JwtClientService,
    ) {
  }

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest) {
    return this.service.generateToken(authRequest).subscribe(token => this.accessUsers(token));
  }

  public accessApi(token) {
    let response = this.service.welcome(token);
    response.subscribe(e => this.response = e);
  }

  public accessUsers(token) {
    let response = this.service.getUserCredentials(token);
    return response.subscribe(e => {
        console.log('Raw data from backend:', e);
        this.usersCredentials = e;
        console.log('User credentials after assignment:', this.usersCredentials);

    });
  }
}
