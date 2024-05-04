import {Component, OnInit} from '@angular/core';
import {CaloriesCalculatorClient} from "../clients/calories-calculator.client";
import {UserClient} from "../clients/user.client";
import {MeasurementClient} from "../clients/measurement.client";
import {switchMap} from "rxjs";
import {GoalsClient} from "../clients/goals.client";
import {
  Nutritons,
  RequestUserActivityDTO,
  User,
  UserGoals,
  UserGoalsResponseDTO,
  UserInfoResponse
} from "../shared/models";
import {MatDialog} from "@angular/material/dialog";
import {DialogEditNutritionsComponent} from "./table-goals/dialog-edit-nutritions/dialog-edit-nutritions.component";
import {NutritionClient} from "../clients/nutrition.client";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent implements OnInit {

  public userInfo: UserInfoResponse;
  public userGoals: UserGoalsResponseDTO;
  public addInfo: boolean = false;
  public userCredentials: User;
  public showAddInformationButton: boolean = true;
  public editNutritions: Nutritons;

  constructor(
    private userClient: UserClient,
    private calCalcClient: CaloriesCalculatorClient,
    private measurementClient: MeasurementClient,
    private goalsClient: GoalsClient,
    public dialog: MatDialog,
    private nutritiousClient: NutritionClient
  ) {
  }

  ngOnInit(): void {
    this.userClient.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      this.userClient.getUserCredentials(this.userInfo.id).subscribe(e => {
        this.userCredentials = e;
        this.goalsClient.findUserGoals(this.userCredentials.id)
          .subscribe(userGoals => {
            this.userGoals = userGoals
          })
      })
    });
  }

  openAddInformationForm() {
    this.addInfo = true;
    this.showAddInformationButton = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEditNutritionsComponent, {
      data: {userGoals: this.userGoals, editNutritions: this.editNutritions}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
      this.editNutritions = result;
      if(this.editNutritions !== null) {
             this.nutritiousClient.updateNutrition(this.userGoals.nutrition.id, this.editNutritions.carbs, this.editNutritions.protein, this.editNutritions.fat)
               .subscribe(nutritions => {
                 this.userGoals.nutrition = nutritions
               });
           }
    })
  }


  saveInfo(data: UserGoals) {
    const reqActivityDTO = new RequestUserActivityDTO();
    reqActivityDTO.activity = data.activity;
    this.measurementClient.createMeasurement(this.userCredentials.id, data.weight)
      .pipe(
        switchMap((measurement) => {
          return this.userClient.editUserActivity(this.userCredentials.id, reqActivityDTO);
        }),
        switchMap((activity) => {
          return this.calCalcClient.calculate(this.userCredentials.id, data.goal);
        }),
      )
      .subscribe(e => {
          this.userGoals = e
        }
      );
    this.showAddInformationButton = false;
    this.addInfo = false;
  }

  cancelInfo() {
    this.showAddInformationButton = true;
    this.addInfo = false;
  }
}
