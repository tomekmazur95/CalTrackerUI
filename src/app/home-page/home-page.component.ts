import {Component, OnInit} from '@angular/core';
import {UserClient} from "../clients/user.client";
import {UserInfoResponse} from "../shared/models";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

   public userInfo: UserInfoResponse;

  constructor(
    private userClient: UserClient
  ) {
  }

  ngOnInit(): void {
    this.userClient.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
    })
  }

}
