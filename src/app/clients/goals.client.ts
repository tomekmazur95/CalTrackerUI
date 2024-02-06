import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserGoalsResponseDTO} from "../../User";


@Injectable({
  providedIn: 'root'
})
export class GoalsClient {

  constructor(private http: HttpClient) {
  }

  public findUserGoals(userId: number) {
    return this.http.get<UserGoalsResponseDTO>(`http://localhost:8080/goals/${userId}`);
  }

/*
  public getMeasurementByType(userId: number, requestParam: MeasureType) {
    return this.http.get<ResponseMeasurementDTO>(`http://localhost:8080/user/${userId}/measurements/last?measureType=${requestParam}`);
  }*/
}
