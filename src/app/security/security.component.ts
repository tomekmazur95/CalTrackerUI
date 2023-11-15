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
    return this.service.generateToken(authRequest).subscribe(token => this.accessUsers(token.token));
  }


  public accessUsers(token) {
    let response = this.service.getUserCredentials(token);
    return response.subscribe(e => {
        this.usersCredentials = e;
    });
  }
}
