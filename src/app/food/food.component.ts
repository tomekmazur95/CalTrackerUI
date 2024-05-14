import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {

  selectedButton: string = 'food_dairy';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
