import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData, Nutritons} from "../../../shared/models";

@Component({
    selector: 'app-dialog-edit-nutritions',
    templateUrl: './dialog-edit-nutritions.component.html',
    styleUrl: './dialog-edit-nutritions.component.css'
})
export class DialogEditNutritionsComponent {

    carbs = this.data.userGoals.nutrition.carbohydratePercent * 100;
    protein = this.data.userGoals.nutrition.proteinPercent * 100;
    fat = this.data.userGoals.nutrition.fatPercent * 100;
    sum: number = 100;
    notValid: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<DialogEditNutritionsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    closeDialog() {
        const result = new Nutritons();
        result.carbs = this.carbs/100;
        result.protein = this.protein/100;
        result.fat = this.fat/100;
        this.dialogRef.close(result);
    }

    checkSumOfNutrition() {
        this.sum = this.carbs + this.fat + this.protein;
        this.notValid = this.sum !== 100;
    }
}
