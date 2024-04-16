import {Component, Input} from '@angular/core';
import { UserGoalsResponseDTO} from "../../shared/models";

@Component({
  selector: 'app-table-goals',
  templateUrl: './table-goals.component.html',
  styleUrl: './table-goals.component.css'
})
export class TableGoalsComponent {

  @Input() userGoals: UserGoalsResponseDTO;
}
