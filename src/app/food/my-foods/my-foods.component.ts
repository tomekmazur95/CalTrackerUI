import { Component } from '@angular/core';
import {RequestFoodDTO, ResponseFoodDTO } from "../../shared/models";
import {FoodClient} from "../../clients/food.client";
import {UserClient} from "../../clients/user.client";

@Component({
  selector: 'app-my-foods',
  templateUrl: './my-foods.component.html',
  styleUrl: './my-foods.component.css'
})
export class MyFoodsComponent {
  addFood: boolean = false;
  createdFood: ResponseFoodDTO;

  constructor(
    private foodClient: FoodClient,
    private userClient: UserClient
  ) {}
  openAddFoodComponent() {
    this.addFood = true;
  }

  cancelCreating() {
    this.addFood = false;
  }

  saveCreating(requestFoodDTO: RequestFoodDTO) {
    console.log('Request: ' + requestFoodDTO)
    this.userClient.getUserInfo().subscribe(userResponse => {
      this.userClient.getUserCredentials(userResponse.id).subscribe(user => {
        this.foodClient.createFood(user.id, requestFoodDTO).subscribe(foodResponse =>
          this.createdFood = foodResponse
        )
      })
    })
    this.addFood = false;
  }
}
