import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {TokenInterceptor} from "./helpers/token.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {UserComponent} from "./user/user.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {AddInfoComponent} from './user/add-info/add-info.component';
import {EditInfoComponent} from './user/edit-info/edit-info.component';
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HomePageComponent} from './home-page/home-page.component';
import {NgOptimizedImage} from "@angular/common";
import {GoalsComponent} from './goals/goals.component';
import {GoalsAddInfoComponent} from './goals/goals-add-info/goals-add-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UserComponent,
    AddInfoComponent,
    EditInfoComponent,
    HomePageComponent,
    GoalsComponent,
    GoalsAddInfoComponent
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
    MatGridListModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    NgOptimizedImage,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
