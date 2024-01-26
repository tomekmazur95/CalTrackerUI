import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-goals-add-info',
  templateUrl: './goals-add-info.component.html',
  styleUrl: './goals-add-info.component.css'
})
export class GoalsAddInfoComponent {

  @Output() onSave= new EventEmitter();
  @Output() onCancel = new EventEmitter();


  save() {
    this.onSave.emit();
  }

  cancel() {
    this.onCancel.emit();
  }
}
