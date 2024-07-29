import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-foods',
  templateUrl: './create-foods.component.html',
  styleUrl: './create-foods.component.css'
})
export class CreateFoodsComponent {

  createFoodForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    value: new FormControl(''),
    unit: new FormControl(''),
    calories: new FormControl(''),
    totalFat: new FormControl(''),
    sodium: new FormControl(''),
    potassium: new FormControl(''),
    carbohydrate: new FormControl(''),
    protein: new FormControl(''),
  })

}
