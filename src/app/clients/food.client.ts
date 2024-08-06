import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestFoodDTO, ResponseFoodDTO} from "../shared/models";

@Injectable({
  providedIn: 'root'
})
export class FoodClient {

  constructor(private http: HttpClient) { }

  public createFood(userId: number, requestFoodDTO: RequestFoodDTO) {
    return this.http.post<ResponseFoodDTO>(`http://localhost:8080/foods?userId=${userId}`, requestFoodDTO)
  }
}
