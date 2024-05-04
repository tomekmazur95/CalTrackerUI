import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ResponseMeasurementDTO, ResponseNutritionDTO} from "../shared/models";


@Injectable({
  providedIn: 'root'
})
export class NutritionClient {

  constructor(private http: HttpClient) {
  }

  public updateNutrition(nutritionId: number, carbs: number, protein: number, fat: number) {
    return this.http.put<ResponseNutritionDTO>(`http://localhost:8080/nutritions/${nutritionId}?carbs=${carbs}&protein=${protein}&fat=${fat}`, null);
  }

}
