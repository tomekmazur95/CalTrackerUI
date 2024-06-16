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
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from "@angular/material/radio";
import { TableGoalsComponent } from './goals/table-goals/table-goals.component';
import { DialogEditNutritionsComponent } from './goals/table-goals/dialog-edit-nutritions/dialog-edit-nutritions.component';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import { AddPhotoComponent } from './user/edit-info/add-photo/add-photo.component';
import { EditPhotoComponent } from './user/edit-info/edit-photo/edit-photo.component';
import { FoodComponent } from './food/food.component';
import { FoodDairyComponent } from './food/food-dairy/food-dairy.component';
import { MyFoodsComponent } from './food/my-foods/my-foods.component';
import { MyMealsComponent } from './food/my-meals/my-meals.component';
import {MatIconModule} from "@angular/material/icon";
import { CreateFoodsComponent } from './food/my-foods/create-foods/create-foods.component';
import { SearchFoodsComponent } from './food/my-foods/search-foods/search-foods.component';

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
    GoalsAddInfoComponent,
    TableGoalsComponent,
    DialogEditNutritionsComponent,
    AddPhotoComponent,
    EditPhotoComponent,
    FoodComponent,
    FoodDairyComponent,
    MyFoodsComponent,
    MyMealsComponent,
    CreateFoodsComponent,
    SearchFoodsComponent
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
    MatRadioModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    { provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
