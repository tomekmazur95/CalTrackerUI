/*
import {Component, OnInit} from '@angular/core';
import {AuthenticationClient} from "../clients/authentication.client";
import {User} from "../../User";
import {AuthenticationRequest} from "../../AuthenticationResponse";
import {AuthenticationService} from "../services/authentication.service";

@Component({
    selector: 'app-logging',
    templateUrl: './logging.component.html',
    styleUrl: './logging.component.css'
})
export class LoggingComponent implements OnInit {

    usersCredentials: User;
    authRequest: AuthenticationRequest;
    displayError: string;

    constructor(
        private service: AuthenticationService,
    ) {
    }

    onLoginClick() {
        const userEmailInput = document.getElementById('uMail') as HTMLInputElement;
        const userPasswordInput = document.getElementById('psw') as HTMLInputElement;
        const userEmail = userEmailInput.value;
        const userPassword = userPasswordInput.value;
        this.authRequest = {
            "email": userEmail,
            "password": userPassword
        }
        this.getAccessToken(this.authRequest);
    }
    ngOnInit() {
    }
    public getAccessToken(authRequest: AuthenticationRequest) {
        return this.service.login(authRequest);
    }


    /!*    public accessUsers(token: string) {
            let response = this.service.getUserCredentials(token);
            return response.subscribe(e => {
                this.usersCredentials = e;
            });
        }*!/
}
*/
