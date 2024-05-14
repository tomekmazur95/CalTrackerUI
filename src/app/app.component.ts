import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedButton: string;

  ngOnInit() {
  }

  constructor(
    private authenticationService: AuthenticationService) {
  }

  logout(): void {
    this.authenticationService.logout();
    this.selectedButton = '';
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
