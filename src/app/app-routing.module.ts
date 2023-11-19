import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoggingComponent} from "./security/logging.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: 'login', component: LoggingComponent},
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
export const routingComponents = [LoggingComponent, AppComponent]
