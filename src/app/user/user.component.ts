import {Component, OnInit} from '@angular/core';
import {UserClient} from "../clients/user.client";
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../../User";
import {UserInfoResponse} from "../../AuthenticationResponse";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  public userCredentials: User;
  public userInfo: UserInfoResponse;
  public addInfo :boolean = false;
  showAddInformationButton = true;
  constructor(
      private userClient:  UserClient,
      private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
     this.userClient.getUserInfo().subscribe(userinfo => {
       this.userInfo = userinfo
       this.userClient.getUserCredentials(this.userInfo.id).subscribe(e => this.userCredentials = e)
     });
  }

  logout(): void {
    this.authenticationService.logout();
  }
  openAddInformationForm() {
    this.addInfo = true;
    this.showAddInformationButton = false;
  }
  cancelInfo() {
    this.addInfo = false;
    this.showAddInformationButton = true;
  }
  saveInfo($event: any) {
    this.addInfo= false;
    this.showAddInformationButton = true;
  }
}
