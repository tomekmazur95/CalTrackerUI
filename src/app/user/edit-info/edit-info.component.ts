import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity, Gender, MeasureType, Unit} from "../../../User";
import {FormControl, FormGroup} from "@angular/forms";

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
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrl: './edit-info.component.css'
})
export class EditInfoComponent{

  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();
  @Input() userCredentials:User;

  genderList: string[] = [
    'Male', 'Female'
  ];

  genderListMap: Map<string, Gender> = new Map([
    ['Male', Gender.MALE],
    ['Female', Gender.FEMALE]
  ])

  formatGender() {
    let gender = this.userCredentials.gender;
    let genderKey: string;
    for(const [k, v] of this.genderListMap) {
      if(v === gender) {
        genderKey = k;
        break;
      }
    }
    return genderKey;
  }

  activityList: string[] = [
    'Sedentary',
    'Lightly active',
    'Moderately active',
    'Very active',
    'Extra active'
  ]

  activityListMap : Map<string, Activity> = new Map ([
    ['Sedentary' , Activity.SEDENTARY],
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

  save() {
    let name = this.userForm.get('userName').value;
    if(name.length === 0) {
      this.userFormRequest.userName = this.userCredentials.userName;
    }
    else {
      this.userFormRequest.userName = name;
    }

    let age = this.userForm.get('age').value;
    if(age === null) {
      this.userFormRequest.age = this.userCredentials.age;
    }
    else {
      this.userFormRequest.age = age;
    }

    let gender = this.userForm.get('gender').value;
    if (gender.length === 0) {
      this.userFormRequest.gender = this.userCredentials.gender;
    }
    else {
      this.userFormRequest.gender = this.fetchGender(gender);
    }

    let height = this.userForm.get('height').value;
    if(height === null) {
     this.userFormRequest.height = this.userCredentials.height;
    }
    else {
      this.userFormRequest.height = this.fetchHeight(height);
    }

    let activity = this.userForm.get('activity').value;
    if(activity.length === 0) {
      this.userFormRequest.activity = this.userCredentials.activity;
    }
    else {
      this.userFormRequest.activity = this.fetchActivity(activity);
    }
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
