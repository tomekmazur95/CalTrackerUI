import {Component, OnInit} from '@angular/core';
import {CaloriesCalculatorClient} from "../clients/calories-calculator.client";
import {UserClient} from "../clients/user.client";
import {UserInfoResponse} from "../../AuthenticationResponse";
import {ResponseTdeeDTO} from "../../ResponseTdeeDTO";
import {Activity, MeasureType, Unit} from "../../User";
import {ResponseSurplusDTO} from "../../ResponseSurplusDTO";
import {ResponseDeficitDTO} from "../../ResponseDeficitDTO";

class MeasurementRequest {
  type: MeasureType;
  value: number;
  unit: Unit;
  date: string;
}
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
  public userTdee: ResponseTdeeDTO;
  public addInfo: boolean;
  public userSurplus: ResponseSurplusDTO;
  public userDeficit: ResponseDeficitDTO;
  showAddInformationButton: boolean = true;

  constructor(
    private userClient: UserClient,
    private calCalcClient: CaloriesCalculatorClient,
  ) {
  }

  ngOnInit(): void {
    this.userClient.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      this.calCalcClient.getUserTdee(this.userInfo.id)
        .subscribe(tdee => this.userTdee = tdee)
    });
  }

  openAddInformationForm() {
    this.addInfo = true;
    this.showAddInformationButton = false;
  }

  saveInfo(data: userGoals) {
    console.log(data);
    this.calCalcClient.calculateTdee(this.userInfo.id).subscribe(tdee => this.userTdee = tdee);
    this.calCalcClient.calculateSurplus(this.userInfo.id).subscribe(surplus => this.userSurplus = surplus);
    this.calCalcClient.calculateDeficit(this.userInfo.id).subscribe(deficit => this.userDeficit = deficit);

    this.showAddInformationButton = true;
    this.addInfo = false;
  }

  cancelInfo() {
    this.showAddInformationButton = true;
    this.addInfo = false;
  }
}
