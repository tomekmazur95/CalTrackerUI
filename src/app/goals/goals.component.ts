import {Component, OnInit} from '@angular/core';
import {CaloriesCalculatorClient} from "../clients/calories-calculator.client";
import {UserClient} from "../clients/user.client";
import {UserInfoResponse} from "../../AuthenticationResponse";
import {Activity, MeasureType, UserGoalsResponseDTO} from "../../User";
import {MeasurementRequest} from "../../MeasurementRequest";
import {MeasurementClient} from "../clients/measurement.client";
import {RequestUserActivityDTO} from "../../RequestUserActivityDTO";
import {switchMap} from "rxjs";
import {GoalsClient} from "../clients/goals.client";


class userGoals {
  weight: MeasurementRequest;
  activity: Activity;
  goal: MeasureType;
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent implements OnInit {

  public userInfo: UserInfoResponse;
  public userGoals: UserGoalsResponseDTO;
  public addInfo: boolean = false;
  showAddInformationButton: boolean = true;

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
      this.goalsClient.findUserGoals(this.userInfo.id)
        .subscribe(userGoals => this.userGoals = userGoals)
    });
  }

  openAddInformationForm() {
    this.addInfo = true;
    this.showAddInformationButton = false;
  }

  saveInfo(data: userGoals) {
    const reqActivityDTO = new RequestUserActivityDTO();
    reqActivityDTO.activity = data.activity;
    this.measurementClient.createMeasurement(this.userInfo.id, data.weight)
      .pipe(
        switchMap((measurement) => {
          return this.userClient.editUserActivity(this.userInfo.id, reqActivityDTO);
        }),
        switchMap((activity) => {
            return this.calCalcClient.calculate(this.userInfo.id, data.goal);
        }),
      )
      .subscribe(e => this.userGoals = e
      );
    this.showAddInformationButton = false;
    this.addInfo = false;
  }

  cancelInfo() {
    this.showAddInformationButton = true;
    this.addInfo = false;
  }
}
