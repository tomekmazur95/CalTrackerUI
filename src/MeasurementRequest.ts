import {MeasureType, Unit} from "./User";

export interface MeasurementRequest {
  type: MeasureType;
  value: number;
  unit: Unit;
  date: string;
}
