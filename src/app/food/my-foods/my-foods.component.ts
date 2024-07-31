import { Component } from '@angular/core';
import {RequestFoodDTO} from "../../shared/models";

@Component({
  selector: 'app-my-foods',
  templateUrl: './my-foods.component.html',
  styleUrl: './my-foods.component.css'
})
export class MyFoodsComponent {
  addFood: boolean = false;

  openAddFoodComponent() {
    this.addFood = true;
  }

  cancelCreating() {
    this.addFood = false;
  }

  saveCreating(requestFoodDTO: RequestFoodDTO) {
    console.log(requestFoodDTO)
    this.addFood = false;
  }
}
