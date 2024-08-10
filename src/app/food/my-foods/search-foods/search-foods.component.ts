import {Component, OnInit} from '@angular/core';
import {FoodClient} from "../../../clients/food.client";
import {UserClient} from "../../../clients/user.client";
import {ResponseFoodDTO} from "../../../shared/models";

@Component({
  selector: 'app-search-foods',
  templateUrl: './search-foods.component.html',
  styleUrl: './search-foods.component.css'
})
export class SearchFoodsComponent implements OnInit {

  userFoodList: ResponseFoodDTO[];
  food: any;
  filteredUserFoodList: ResponseFoodDTO[];

  constructor(private foodClient: FoodClient,
              private userClient: UserClient) {
  }

  ngOnInit(): void {
    this.userClient.getUserInfo().subscribe(userResponse => {
      this.userClient.getUserCredentials(userResponse.id).subscribe(user => {
        this.foodClient.findUserFoods(user.id).subscribe(foodList => {
            this.userFoodList = foodList;
            this.filteredUserFoodList = this.userFoodList;
          }
        )
      })
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredUserFoodList = this.userFoodList;
      return;
    }
    this.filteredUserFoodList = this.userFoodList.filter(
      food =>
        food?.name.toLowerCase().includes(text.toLowerCase())
    )
  }
}
