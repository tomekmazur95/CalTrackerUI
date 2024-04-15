import {Component, OnInit} from '@angular/core';
import {CaloriesCalculatorClient} from "../clients/calories-calculator.client";
import {UserClient} from "../clients/user.client";
import {MeasurementClient} from "../clients/measurement.client";
import {switchMap} from "rxjs";
import {GoalsClient} from "../clients/goals.client";
import {
  Nutrition,
  RequestUserActivityDTO,
  User,
  UserGoals,
  UserGoalsResponseDTO,
  UserInfoResponse
} from "../shared/modules";

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
  public nutrition = new Nutrition();

  constructor(
    private userClient: UserClient,
    private calCalcClient: CaloriesCalculatorClient,
    private measurementClient: MeasurementClient,
    private goalsClient: GoalsClient
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
            this.mapperToPercent();
          })
      })
    });
  }

  openAddInformationForm() {
    this.addInfo = true;
    this.showAddInformationButton = false;
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
          this.mapperToPercent();
        }
      );
    this.showAddInformationButton = false;
    this.addInfo = false;
  }

  cancelInfo() {
    this.showAddInformationButton = true;
    this.addInfo = false;
  }

  mapperToPercent() {
    this.nutrition.carbs = this.userGoals.nutrition.carbohydratePercent * 100;
    this.nutrition.protein = this.userGoals.nutrition.proteinPercent * 100;
    this.nutrition.fat = this.userGoals.nutrition.fatPercent * 100;
  }
}
