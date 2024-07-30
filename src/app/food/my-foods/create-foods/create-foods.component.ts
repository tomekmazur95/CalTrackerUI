import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RequestFoodDTO, Unit} from "../../../shared/models";

@Component({
  selector: 'app-create-foods',
  templateUrl: './create-foods.component.html',
  styleUrl: './create-foods.component.css'
})
export class CreateFoodsComponent {

  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  public requestFoodDTO: RequestFoodDTO;

  createFoodForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    value: new FormControl(null),
    unit: new FormControl(null),
    calories: new FormControl(null),
    fat: new FormControl(null),
    carbohydrate: new FormControl(null),
    protein: new FormControl(null),
  })

  public save() {
    this.requestFoodDTO.name = this.createFoodForm.get('name').value;
    this.requestFoodDTO.description = this.createFoodForm.get('description').value;
    this.requestFoodDTO.date = Date.now();
    this.requestFoodDTO.requestFoodFactDTO.value = this.createFoodForm.get('value').value;
    this.requestFoodDTO.requestFoodFactDTO.unit = this.fetchUnit(this.createFoodForm.get('unit').value);
    this.requestFoodDTO.requestFoodFactDTO.calories = this.createFoodForm.get('calories').value;
    this.requestFoodDTO.requestFoodFactDTO.fat = this.createFoodForm.get('fat').value;
    this.requestFoodDTO.requestFoodFactDTO.carbohydrate = this.createFoodForm.get('carbohydrate').value;
    this.requestFoodDTO.requestFoodFactDTO.protein = this.createFoodForm.get('protein').value;
    this.onSave.emit();
  }

  public cancel() {
    this.onCancel.emit();
  }

  public unitList: String[] = [
    'gram',
    'kilogram'
  ]

  private unitMap: Map<string, Unit> = new Map([
    ['gram', Unit.GRAMS],
    ['kilogram', Unit.KILOGRAMS]
  ])

  private fetchUnit(unit: string) {
    return this.unitMap.get(unit);
  }
}
