import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MeasureType, UserGoalsResponseDTO} from "../../User";

@Injectable({
  providedIn: 'root'
})
export class CaloriesCalculatorClient {

  constructor(private http: HttpClient) {
  }


  calculate(userId: number, goal: MeasureType):Observable<UserGoalsResponseDTO>{
    return this.http.post<UserGoalsResponseDTO>(`http://localhost:8080/user/${userId}/calories?goal=${goal}`, null);
  }

}
