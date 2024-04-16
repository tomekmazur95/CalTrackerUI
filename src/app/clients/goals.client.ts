import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserGoalsResponseDTO} from "../shared/models";


@Injectable({
  providedIn: 'root'
})
export class GoalsClient {

  constructor(private http: HttpClient) {
  }

  public findUserGoals(userId: number) {
    return this.http.get<UserGoalsResponseDTO>(`http://localhost:8080/goals/${userId}`);
  }
}
