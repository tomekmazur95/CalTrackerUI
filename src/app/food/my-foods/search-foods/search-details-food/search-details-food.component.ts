import {Component, Input} from '@angular/core';
import {ResponseFoodDTO} from "../../../../shared/models";

@Component({
  selector: 'app-search-details-food',
  templateUrl: './search-details-food.component.html',
  styleUrl: './search-details-food.component.css'
})
export class SearchDetailsFoodComponent {

  @Input() foodDetails: ResponseFoodDTO;
}
