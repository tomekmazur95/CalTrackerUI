import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  public loginForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  public onSubmit() {
    this.authenticationService.login(
        this.loginForm.get('email')!.value,
        this.loginForm.get('password')!.value)
  }
}
