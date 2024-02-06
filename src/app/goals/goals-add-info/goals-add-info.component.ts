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

  weight: MeasurementRequest = new MeasurementRequest();
  activity: Activity;
  goal: MeasureType;

  save() {
    this.weight.value = this.goalsForm.get('currentWeight').value;
    this.weight.unit = Unit.KILOGRAMS;
    this.weight.type = MeasureType.CURRENT_WEIGHT;
    this.activity = this.fetchActivity(this.goalsForm.get('activity').value);
    this.goal = this.fetchGoal(this.goalsForm.get('goal').value);
    const userGoals = {
      weight: this.weight,
      activity: this.activity,
      goal: this.goal,
    }
    this.onSave.emit(userGoals);
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
