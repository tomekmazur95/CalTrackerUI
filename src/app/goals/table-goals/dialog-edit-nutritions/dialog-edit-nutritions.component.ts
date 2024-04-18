import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../goals.component";

@Component({
  selector: 'app-dialog-edit-nutritions',
  templateUrl: './dialog-edit-nutritions.component.html',
  styleUrl: './dialog-edit-nutritions.component.css'
})
export class DialogEditNutritionsComponent {

  carbs = this.data.userGoals.nutrition.carbohydratePercent * 100;
  protein = this.data.userGoals.nutrition.proteinPercent * 100;
  fat = this.data.userGoals.nutrition.fatPercent * 100;

  constructor(
    public dialogRef: MatDialogRef<DialogEditNutritionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick():void {
    this.dialogRef.close();
  }
  onSave(): void {
    this.data.editNutritions.carbs = this.carbs/100;
    this.data.editNutritions.protein = this.protein/100;
    this.data.editNutritions.fat = this.fat/100;
  }
}
