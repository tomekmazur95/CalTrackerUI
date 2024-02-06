import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseTdeeDTO} from "../../ResponseTdeeDTO";
import {Observable} from "rxjs";
import {ResponseSurplusDTO} from "../../ResponseSurplusDTO";
import {ResponseDeficitDTO} from "../../ResponseDeficitDTO";
import {MeasureType, UserGoalsResponseDTO} from "../../User";

@Injectable({
  providedIn: 'root'
})
export class CaloriesCalculatorClient {

  constructor(private http: HttpClient) {
  }

  getUserTdee(userId: number): Observable<UserGoalsResponseDTO> {
    return this.http.get<UserGoalsResponseDTO>(`http://localhost:8080/user/${userId}/calories/tdee`);
  }

  calculate(userId: number, goal: MeasureType):Observable<UserGoalsResponseDTO>{
    return this.http.post<UserGoalsResponseDTO>(`http://localhost:8080/user/${userId}/calories?goal=${goal}`, null);
  }
/*
  calculateSurplus(userId: number): Observable<UserGoalsResponseDTO> {
    return this.http.post<UserGoalsResponseDTO>(`http://localhost:8080/user/${userId}/calories/surplus`, null);
  }

  calculateDeficit(userId: number): Observable<ResponseDeficitDTO> {
    return this.http.post<UserGoalsResponseDTO>(`http://localhost:8080/user/${userId}/calories/deficit`, null);
  }*/
}
