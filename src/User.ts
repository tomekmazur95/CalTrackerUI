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
  HEIGHT = 'HEIGHT'
}

export enum Unit {
  CENTIMETERS = 'CENTIMETERS'
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
  birthDate: string,
  gender: Gender,
  activity: Activity,
  height: Measurement
}
