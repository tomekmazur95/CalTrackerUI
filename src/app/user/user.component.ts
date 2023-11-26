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
  public editInfo: boolean = false;

  showAddInformationButton = true;
  showEditInformationButton = true;
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
    this.showEditInformationButton= true;
    this.editInfo= false;
  }
  saveInfo(data: any) {
    this.userClient.createUserCredentials(this.userInfo.id, data).subscribe(e=> this.userCredentials=e);
    this.addInfo= false;
    this.showAddInformationButton = true;
  }

  openEditInformationForm() {
    this.editInfo= true;
    this.showEditInformationButton = false;
  }

  saveEditInfo(data: any) {
    this.userClient.editUserCredentials(this.userCredentials.id, data).subscribe(e => this.userCredentials = e);
    this.editInfo = false;
    this.showEditInformationButton = true;
  }
}
