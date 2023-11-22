import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {authGuard} from "./helpers/auth.guard";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {UserComponent} from "./user/user.component";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: '', component: UserComponent, canActivate: [authGuard]},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
