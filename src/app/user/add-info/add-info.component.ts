import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Activity, Gender, MeasureType, Unit} from "../../shared/modules";

class User {
  userName: string;
  gender: Gender;
  activity: Activity;
  age: number;
  height: MeasurementRequest;
}

class MeasurementRequest {
  type: MeasureType;
  value: number;
  unit: Unit;
  date: string;
}

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrl: './add-info.component.css'
})
export class AddInfoComponent {

  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  genderList: string[] = [
    'Male', 'Female'
  ];
  genderListMap: Map<string, Gender> = new Map([
    ['Male', Gender.MALE],
    ['Female', Gender.FEMALE]
  ])

  activityList: string[] = [
    'Sedentary',
    'Lightly active',
    'Moderately active',
    'Very active',
    'Extra active'
  ]
  activityListMap: Map<string, Activity> = new Map([
    ['Sedentary', Activity.SEDENTARY],
    ['Lightly active', Activity.LIGHTLY_ACTIVE],
    ['Moderately active', Activity.MODERATELY_ACTIVE],
    ['Very active', Activity.VERY_ACTIVE],
    ['Extra active', Activity.EXTRA_ACTIVE]
  ])

  userFormRequest: User = new User();


  userForm = new FormGroup({
    userName: new FormControl(''),
    age: new FormControl(null),
    gender: new FormControl(''),
    height: new FormControl(null),
    activity: new FormControl(''),
  })

  constructor() {

  }

  save() {
    this.userFormRequest.userName = this.userForm.get('userName').value;
    this.userFormRequest.age = this.userForm.get('age').value;
    this.userFormRequest.gender = this.fetchGender(this.userForm.get('gender').value);
    this.userFormRequest.height = this.fetchHeight(this.userForm.get('height').value);
    this.userFormRequest.activity = this.fetchActivity(this.userForm.get('activity').value);
    this.onSave.emit(this.userFormRequest);
  }

  fetchHeight(height: number): MeasurementRequest {
    const heightRequest = new MeasurementRequest();
    heightRequest.value = height;
    heightRequest.type = MeasureType.HEIGHT;
    heightRequest.unit = Unit.CENTIMETERS;
    return heightRequest;
  }

  fetchGender(gender: string): Gender {
    return this.genderListMap.get(gender);
  }

  cancel() {
    this.onCancel.emit();
  }

  private fetchActivity(activity: string) {
    return this.activityListMap.get(activity);
  }
}
