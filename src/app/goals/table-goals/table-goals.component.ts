import {Component, Input} from '@angular/core';
import {Nutrition, UserGoalsResponseDTO} from "../../shared/modules";

@Component({
  selector: 'app-table-goals',
  templateUrl: './table-goals.component.html',
  styleUrl: './table-goals.component.css'
})
export class TableGoalsComponent {

  @Input() userGoals: UserGoalsResponseDTO;
  @Input() nutrition: Nutrition;
}
