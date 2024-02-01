import {Component, OnInit} from '@angular/core';
import {CaloriesCalculatorClient} from "../clients/calories-calculator.client";
import {UserClient} from "../clients/user.client";
import {UserInfoResponse} from "../../AuthenticationResponse";
import {Activity, MeasureType} from "../../User";
import {MeasurementRequest} from "../../MeasurementRequest";
import {MeasurementClient} from "../clients/measurement.client";
import {ResponseMeasurementDTO} from "../../ResponseMeasurementDTO";
import {RequestUserActivityDTO} from "../../RequestUserActivityDTO";
import {ResponseUserActivityDTO} from "../../ResponseUserActivityDTO";
import {finalize, switchMap, tap} from "rxjs";


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
  public userTdee;
  public addInfo: boolean = false;
  public userSurplus;
  public userDeficit;
  public userLastWeight: ResponseMeasurementDTO;
  public userActivity: ResponseUserActivityDTO;
  showAddInformationButton: boolean = true;

  constructor(
    private userClient: UserClient,
    private calCalcClient: CaloriesCalculatorClient,
    private measurementClient: MeasurementClient,
  ) {
  }

  ngOnInit(): void {
    this.userClient.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      this.calCalcClient.getUserTdee(this.userInfo.id)
        .subscribe(tdee => this.userTdee = tdee)
    });
    console.log(this.addInfo);
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
          this.userLastWeight = measurement;
          return this.userClient.editUserActivity(this.userInfo.id, reqActivityDTO);
        }),
        switchMap((activity) => {
          this.userActivity = activity;
          if (data.goal === MeasureType.ENERGY_TDEE) {
            return this.calCalcClient.calculateTdee(this.userInfo.id);
          } else if (data.goal === MeasureType.ENERGY_SURPLUS) {
            return this.calCalcClient.calculateSurplus(this.userInfo.id);
          } else if (data.goal === MeasureType.ENERGY_DEFICIT) {
            return this.calCalcClient.calculateDeficit(this.userInfo.id);
          }
        }),
        tap((result) => {
          if (data.goal === MeasureType.ENERGY_TDEE) {
            this.userTdee = result;
          } else if (data.goal === MeasureType.ENERGY_SURPLUS) {
            this.userSurplus = result;
          } else if (data.goal === MeasureType.ENERGY_DEFICIT) {
            this.userDeficit = result;
          }
        }),
        finalize(() => {
        })
      )
      .subscribe(
      );
    this.showAddInformationButton = false;
    this.addInfo = false;
  }

  cancelInfo() {
    this.showAddInformationButton = true;
    this.addInfo = false;
  }
}
