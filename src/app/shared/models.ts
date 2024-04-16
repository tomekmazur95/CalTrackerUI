

export enum Activity {
  SEDENTARY='SEDENTARY',
  LIGHTLY_ACTIVE='LIGHTLY_ACTIVE',
  MODERATELY_ACTIVE='MODERATELY_ACTIVE',
  VERY_ACTIVE='VERY_ACTIVE',
  EXTRA_ACTIVE='EXTRA_ACTIVE'
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum MeasureType {
  HEIGHT = 'HEIGHT',
  CURRENT_WEIGHT = 'CURRENT_WEIGHT',
  ENERGY_TDEE = 'ENERGY_TDEE',
  ENERGY_SURPLUS = 'ENERGY_SURPLUS',
  ENERGY_DEFICIT = 'ENERGY_DEFICIT'
}

export enum Unit {
  CENTIMETERS = 'CENTIMETERS',
  KILOGRAMS = 'KILOGRAMS'
}

export interface Measurement {
  id: number,
  type: MeasureType,
  value: number,
  unit: Unit,
  date: string
}

export interface User {
  id: number,
  userName: string,
  age: number,
  gender: Gender,
  activity: Activity,
  height: Measurement
}
export interface ResponseNutritionDTO {
  id: number,
  fatPercent: number,
  carbohydratePercent: number,
  proteinPercent: number,
  fat: number,
  carbohydrate: number,
  protein: number,
  unit: Unit,
  date: string
}

export interface UserGoalsResponseDTO {
  goal : Measurement,
  currentWeight: Measurement,
  activity: Activity,
  nutrition: ResponseNutritionDTO
}

export interface UserGoals {
  weight: MeasurementRequest;
  activity: Activity;
  goal: MeasureType;
}

export class UserGoals {
  weight: MeasurementRequest;
  activity: Activity;
  goal: MeasureType;
}


export interface AuthenticationResponse {
  token: string
}
export interface AuthenticationRequest {
  email : string,
  password: string
}
export interface RegisterRequest {
  email: string,
  password: string
}

export interface UserInfoResponse {
  id: number,
  email: string
}

export interface MeasurementRequest {
  type: MeasureType;
  value: number;
  unit: Unit;
  date: string;
}

export class RequestUserActivityDTO {
  activity: Activity;
}

export interface ResponseMeasurementDTO {
  id: number;
  type: MeasureType;
  value: number;
  unit: Unit;
  date: string
}

export interface ResponseUserActivityDTO {
  id: number;
  activity: Activity;
}

