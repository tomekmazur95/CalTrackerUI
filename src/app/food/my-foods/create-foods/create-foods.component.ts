import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Unit} from "../../../shared/models";

@Component({
  selector: 'app-create-foods',
  templateUrl: './create-foods.component.html',
  styleUrl: './create-foods.component.css'
})
export class CreateFoodsComponent {

  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  createFoodForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    value: new FormControl(''),
    unit: new FormControl(''),
    calories: new FormControl(''),
    fat: new FormControl(''),
    carbohydrate: new FormControl(''),
    protein: new FormControl(''),
  })

  public save() {
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
