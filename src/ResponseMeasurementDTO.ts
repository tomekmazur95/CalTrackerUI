import {MeasureType, Unit} from "./User";

export interface ResponseMeasurementDTO {
  id: number;
  type: MeasureType;
  value: number;
  unit: Unit;
  date: string
}
