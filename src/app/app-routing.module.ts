import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {authGuard} from "./helpers/auth.guard";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {UserComponent} from "./user/user.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {GoalsComponent} from "./goals/goals.component";
import {FoodDairyComponent} from "./food/food-dairy/food-dairy.component";
import {MyFoodsComponent} from "./food/my-foods/my-foods.component";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'profile', component: UserComponent, canActivate: [authGuard]},
  { path: '', component: HomePageComponent, canActivate: [authGuard]},
  { path: 'goals', component: GoalsComponent, canActivate: [authGuard]},
  { path: 'food/dairy', component: FoodDairyComponent, canActivate: [authGuard]},
  { path: 'food/mine', component: MyFoodsComponent, canActivate: [authGuard]}
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
