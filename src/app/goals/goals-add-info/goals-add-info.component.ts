import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Activity, MeasureType, Unit} from "../../../User";

class MeasurementRequest {
  type: MeasureType;
  value: number;
  unit: Unit;
  date: string;
}

@Component({
  selector: 'app-goals-add-info',
  templateUrl: './goals-add-info.component.html',
  styleUrl: './goals-add-info.component.css'
})
export class GoalsAddInfoComponent {

  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  userWeight: MeasurementRequest = new MeasurementRequest();
  userGoal: MeasureType;
  userActivity: Activity;

  save() {
    this.userWeight.value = this.goalsForm.get('currentWeight').value;
    this.userWeight.unit = Unit.KILOGRAMS;
    this.userWeight.type = MeasureType.CURRENT_WEIGHT;

    this.userActivity = this.fetchActivity(this.goalsForm.get('activity').value);

    this.userGoal = this.fetchGoal(this.goalsForm.get('goal').value);
    console.log(this.userWeight)
    console.log(this.userActivity)
    console.log(this.userGoal)
    const userData = {
      userWeight: this.userWeight,
      userActivity: this.userActivity,
      userGoal: this.userGoal,
    }
    this.onSave.emit(userData);
  }

  cancel() {
    this.onCancel.emit();
  }

  goalsForm = new FormGroup({
    currentWeight: new FormControl(null),
    activity: new FormControl(''),
    goal: new FormControl('')
  })

  goalList: string[] = [
    'Maintain my current weight',
    'Gain weight',
    'Lose weight'
  ]

  private fetchGoal(goal: string) {
    return this.goalMap.get(goal);
  }

  goalMap: Map<string, MeasureType> = new Map([
    ['Maintain my current weight', MeasureType.ENERGY_TDEE],
    ['Gain weight', MeasureType.ENERGY_SURPLUS],
    ['Lose weight', MeasureType.ENERGY_DEFICIT]
  ])

  private fetchActivity(activity: string) {
    return this.activityListMap.get(activity);
  }

  activityListMap: Map<string, Activity> = new Map([
    ['SEDENTARY', Activity.SEDENTARY],
    ['LIGHTLY ACTIVE', Activity.LIGHTLY_ACTIVE],
    ['MODERATELY ACTIVE', Activity.MODERATELY_ACTIVE],
    ['VERY ACTIVE', Activity.VERY_ACTIVE],
    ['EXTRA ACTIVE', Activity.EXTRA_ACTIVE]
  ])
}
