import { Component } from '@angular/core';

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

  saveCreating() {
    this.addFood = false;
  }
}
