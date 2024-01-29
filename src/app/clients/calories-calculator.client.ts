import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseTdeeDTO} from "../../ResponseTdeeDTO";
import {Observable} from "rxjs";
import {ResponseSurplusDTO} from "../../ResponseSurplusDTO";
import {ResponseDeficitDTO} from "../../ResponseDeficitDTO";

@Injectable({
  providedIn: 'root'
})
export class CaloriesCalculatorClient {

  constructor(private http: HttpClient) {
  }

  getUserTdee(userId: number): Observable<ResponseTdeeDTO> {
    return this.http.get<ResponseTdeeDTO>(`http://localhost:8080/user/${userId}/calories/tdee`);
  }

  calculateTdee(userId: number):Observable<ResponseTdeeDTO>{
    return this.http.post<ResponseTdeeDTO>(`http://localhost:8080/user/${userId}/calories/tdee`, null);
  }

  calculateSurplus(userId: number): Observable<ResponseSurplusDTO> {
    return this.http.post<ResponseSurplusDTO>(`http://localhost:8080/user/${userId}/calories/surplus`, null);
  }

  calculateDeficit(userId: number): Observable<ResponseDeficitDTO> {
    return this.http.post<ResponseDeficitDTO>(`http://localhost:8080/user/${userId}/calories/deficit`, null);
  }
}
