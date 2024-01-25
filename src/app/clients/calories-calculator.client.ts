import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseTdeeDTO} from "../../ResponseTdeeDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CaloriesCalculatorClient {

  constructor(private http: HttpClient) {
  }

  getUserTdee(userId: number): Observable<ResponseTdeeDTO> {
    return this.http.get<ResponseTdeeDTO>(`http://localhost:8080/user/${userId}/calories/tdee`);
  }
}
