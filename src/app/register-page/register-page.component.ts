import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit{
  public registerForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
      this.registerForm = new FormGroup({
          email: new FormControl('', Validators.required),
          password: new FormControl('', [Validators.required, Validators.email]),
      });
  }
  public onSubmit() {
    this.authenticationService.register(
        this.registerForm.get('email')!.value,
        this.registerForm.get('password')!.value)
  }

}
