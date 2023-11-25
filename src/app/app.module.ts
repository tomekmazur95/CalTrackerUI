import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {TokenInterceptor} from "./helpers/token.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {UserComponent} from "./user/user.component";
import {MatGridListModule} from "@angular/material/grid-list";
import { AddInfoComponent } from './user/add-info/add-info.component';
import { EditInfoComponent } from './user/edit-info/edit-info.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginPageComponent,
      RegisterPageComponent,
      UserComponent,
      AddInfoComponent,
      EditInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
