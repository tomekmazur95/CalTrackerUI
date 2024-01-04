import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {authGuard} from "./helpers/auth.guard";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {UserComponent} from "./user/user.component";
import {HomePageComponent} from "./home-page/home-page.component";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'profile', component: UserComponent, canActivate: [authGuard]},
  { path: '', component: HomePageComponent, canActivate: [authGuard]},

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
