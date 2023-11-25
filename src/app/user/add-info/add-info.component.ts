import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Activity, Gender, MeasureType, Unit} from "../../../User";

class User {
  userName: string;
  gender: Gender;
  activity: Activity;
  birthDate: string;
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
  activityList: string[] = [
    'Sedentary',
    'Lightly active',
    'Moderately active',
    'Very active',
    'Extra active'
  ]
  userFormRequest: User = new User();


  userForm = new FormGroup({
    userName: new FormControl(''),
    gender: new FormControl(''),
    height: new FormControl(null),
    activity: new FormControl(''),
  })

  constructor() {

  }

  save() {
    this.userFormRequest.userName = this.userForm.get('userName').value;
    this.userFormRequest.gender = this.fetchGender(this.userForm.get('gender').value);
    this.userFormRequest.height = this.fetchHeight(this.userForm.get('height').value);
    this.onSave.emit(this.userFormRequest);
  }

  fetchHeight(height: number): MeasurementRequest {
    const heightRequest = new MeasurementRequest();
    heightRequest.value = height;
    heightRequest.type = MeasureType.HEIGHT;
    heightRequest.unit = Unit.CENTIMETERS;
    return heightRequest;
  }

  fetchGender(gender: string) {
    if (gender.toUpperCase() === Gender.MALE.toString()) {
      return Gender.MALE
    } else return Gender.FEMALE;
  }

  cancel() {
    this.onCancel.emit();
  }
}
