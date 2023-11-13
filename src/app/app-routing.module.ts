import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SecurityComponent} from "./security/security.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: 'login', component: SecurityComponent},
  { path: ' ', component: AppComponent},
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
export const routingComponents = [SecurityComponent, AppComponent]
