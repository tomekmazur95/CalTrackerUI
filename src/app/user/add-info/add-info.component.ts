import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Gender} from "../../../User";

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrl: './add-info.component.css'
})
export class AddInfoComponent {

  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  genderList:Gender[];


  userForm = new FormGroup({
    userName: new FormControl(''),
    gender: new FormControl(''),
  })
  constructor() {

  }


  save() {
    this.onSave.emit();
  }

  cancel() {
    this.onCancel.emit();
  }
}
