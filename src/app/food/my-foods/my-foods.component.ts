import { Component } from '@angular/core';

@Component({
  selector: 'app-my-foods',
  templateUrl: './my-foods.component.html',
  styleUrl: './my-foods.component.css'
})
export class MyFoodsComponent {
  addFood: boolean = false;
  showAddFoodButton: boolean = true;

  openAddFoodComponent() {
    this.addFood = true;
    this.showAddFoodButton = false;
  }
}
